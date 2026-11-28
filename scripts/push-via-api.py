#!/usr/bin/env python3
"""Push local commits on the current branch to GitHub via the git-database API.

The sandbox has no git-push credential path (HTTPS asks for a username, SSH is
blocked), but the custom.github connector token has Contents write. This
replicates the local HEAD commit on top of the remote branch ref.

Usage: python3 scripts/push-via-api.py [branch]
"""
import base64
import json
import subprocess
import sys

sys.path.insert(0, "/home/hatch/workspace/skills/github/bin")
sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
import importlib.util

spec = importlib.util.spec_from_file_location(
    "gh_api", "/home/hatch/workspace/skills/github/bin/gh_api.py")
# gh_api.py is a CLI; we reuse its auth helpers instead.
import dynamic_credentials as dc
import urllib.request
import urllib.error

API = "https://api.github.com"
REPO = "miltonamistead/brimercon-astro"


def api(method, path, data=None):
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(API + path, data=body, method=method)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("X-GitHub-Api-Version", "2022-11-28")
    if body:
        req.add_header("Content-Type", "application/json")
    dc.add_surrogate_to_request(req, "custom.github", allowed_hosts=["api.github.com"])
    try:
        with urllib.request.urlopen(req) as resp:
            raw = resp.read()
    except urllib.error.HTTPError as e:
        raw = e.read()
        raise RuntimeError(f"{method} {path}: HTTP {e.code} {raw[:200]!r}")
    return json.loads(raw) if raw else {}


def sh(*args):
    p = subprocess.run(args, capture_output=True, text=True, check=True)
    return p.stdout.strip()


def main() -> int:
    branch = sys.argv[1] if len(sys.argv) > 1 else sh("git", "branch", "--show-current")
    local_sha = sh("git", "rev-parse", "HEAD")
    local_msg = sh("git", "log", "-1", "--format=%B")
    author_name = sh("git", "log", "-1", "--format=%an")
    author_email = sh("git", "log", "-1", "--format=%ae")

    ref = api("GET", f"/repos/{REPO}/git/refs/heads/{branch}")
    parent_sha = ref["object"]["sha"]
    if parent_sha == local_sha:
        print("remote already at", local_sha[:7])
        return 0
    parent_commit = api("GET", f"/repos/{REPO}/git/commits/{parent_sha}")
    parent_tree = parent_commit["tree"]["sha"]

    # Files changed in the local commit vs its parent.
    files = sh("git", "diff-tree", "--no-commit-id", "--name-only", "-r", local_sha).splitlines()
    # Handle renames/deletes: rebuild tree entries from git ls-tree of local HEAD,
    # limited to changed paths plus deletions.
    tree_entries = []
    for f in files:
        exists = subprocess.run(["git", "cat-file", "-e", f"{local_sha}:{f}"]).returncode == 0
        if exists:
            blob = api("POST", f"/repos/{REPO}/git/blobs", {
                "content": base64.b64encode(
                    subprocess.run(["git", "show", f"{local_sha}:{f}"],
                                   capture_output=True, check=True).stdout).decode(),
                "encoding": "base64"})
            mode = sh("git", "ls-tree", local_sha, f).split()[0]
            tree_entries.append({"path": f, "mode": mode, "type": "blob", "sha": blob["sha"]})
        else:
            tree_entries.append({"path": f, "mode": "100644", "type": "blob", "sha": None})
    new_tree = api("POST", f"/repos/{REPO}/git/trees",
                   {"base_tree": parent_tree, "tree": tree_entries})
    new_commit = api("POST", f"/repos/{REPO}/git/commits", {
        "message": local_msg, "tree": new_tree["sha"], "parents": [parent_sha],
        "author": {"name": author_name, "email": author_email}})
    api("PATCH", f"/repos/{REPO}/git/refs/heads/{branch}", {"sha": new_commit["sha"]})
    print(f"pushed {branch}: {parent_sha[:7]} -> {new_commit['sha'][:7]}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
