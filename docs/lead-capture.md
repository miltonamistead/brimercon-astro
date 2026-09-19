# Lead capture — in-house form replacing GoHighLevel forms

Goal (kickoff #7): contact/lead forms wired to something Milton owns — email plus a structured lead record — with a working end-to-end path on staging and a confirmation. GoHighLevel is **not** cancelled in this phase and nothing on live is changed.

Live today: forms on home, contact, request-service, and every service/town page post to GoHighLevel (LeadConnector) with reCAPTCHA v3, then show "Request received" or "Something went wrong — call 530-587-0733". A Granola note records that a real customer hit a submission error and that inquiries were meant to enter the Dream Surge pipeline and trigger an SMS workflow. The twin keeps the user-facing behaviour, removes the GHL dependency from the page, and lets Milton choose where leads go.

## 1. Form (client)

Component `src/components/LeadForm.astro`, rendered on: `/`, `/contact/`, `/request-service/`, all `/services/*`, all `/service-areas/*` (same placement pattern as live), and `/service-areas/martis-valley/`.

Fields (mirror live so existing users see nothing new):

| Field | `name` | Type | Required | Validation |
|---|---|---|---|---|
| Full Name | `name` | text | yes | 2–100 chars |
| Phone Number | `phone` | tel | yes | 10–11 digits after stripping punctuation; must start with a US area code (not `0`/`1`) |
| Email Address | `email` | email | no | RFC-ish `x@y.z`, ≤ 200 chars |
| Service Address | `address` | text | no | ≤ 200 chars |
| City | `city` | select | yes | one of `formCities` in `site.ts` (CA list + "Other (CA side)") |
| Describe the Issue | `message` | textarea | yes | 5–3000 chars |
| Preferred Timing | `timing` | select | no | one of `timingOptions` |
| This is urgent / emergency | `urgent` | checkbox | no | "Active leak, burst pipe, gas smell, or no water" helper text; when checked, the confirmation panel leads with the phone |
| (hidden) | `source_path` | hidden | — | set server-side from `Referer`/`Origin` as fallback; client sets `location.pathname` |
| (hidden) | `service_context` | hidden | — | e.g. `water-heaters` on service pages |
| (hidden) | `town_context` | hidden | — | e.g. `truckee` on town pages |
| (hidden) | `company_website` | text, visually hidden, `tabindex=-1`, `autocomplete=off` | — | **honeypot**: must be empty |
| (hidden) | `ts` | hidden | — | render timestamp; server rejects if submitted < 3 s after render or > 24 h later (also handles static caching: `ts` is set by the enhancer script at load; if JS is off, the server skips the time trap and relies on the honeypot) |

Markup rules: real `<label for>` on every control; `required` and `inputmode`/`autocomplete` attributes; error summary region `aria-live="polite"`; submit button text "Submit Request" (live copy); no reCAPTCHA; no third-party scripts.

### Progressive enhancement

- **No JavaScript:** `<form method="post" action="/api/lead">`. Server validates. Success → `303 See Other` to `/thank-you/?ref=<leadId>`. Validation failure → `303` back to `<source_path>?form=error#lead-form` (the page shows a generic error + phone). No lead is lost silently: if delivery fails the server still returns the error path, and the response body/redirect carries `?form=unavailable` so the copy says "call 530-587-0733".
- **JavaScript (≤ 5 KB, `src/scripts/lead-form.ts`, inlined or one file):** intercepts submit, `fetch('/api/lead', { headers: { Accept: 'application/json' } })`, disables the button while pending, then swaps the form for the live "Request received" panel (with the phone line for emergencies) or shows the live "Something went wrong" panel with `tel:` link. Fires `window.dataLayer.push({event:'lead_submit', …})` only if GA4 is enabled.

Copy for both panels is taken verbatim from live (`docs/crawl/` text: "Request received — We'll review your request and get back to you as soon as possible. If this is an emergency, please call 530-587-0733 for the fastest response." / "Something went wrong — We couldn't submit your request. Please try again, or call 530-587-0733").

## 2. Endpoint `POST /api/lead`

`src/pages/api/lead.ts`, `export const prerender = false`. Runs as a Vercel serverless function (Node runtime) via `@astrojs/vercel`; locally via `@astrojs/node` or `astro dev`.

Accepts `application/x-www-form-urlencoded`, `multipart/form-data`, or `application/json`. Content negotiation: if `Accept` includes `application/json` respond JSON, else redirect (see above). `GET` → `405` JSON `{ ok:false, error:'method_not_allowed' }`. Same-origin check: `Origin`/`Referer` host must match the request host when present (blocks cross-site posting; does not break no-JS submits).

Pipeline (`src/lib/leads/`):

1. `parse.ts` — body → plain object regardless of encoding.
2. `validate.ts` — rules from the table; returns `{ ok, lead, errors }`. Spam signals: honeypot non-empty → respond **as if success** (200/303 to thank-you) but do not deliver (do not teach bots); time trap → same. Normalizes phone to E.164 `+1XXXXXXXXXX` and keeps the raw string.
3. `enrich.ts` — `id` (`ld_` + 12 base32 chars from `crypto.randomUUID()`), `receivedAt` ISO, `sourcePath`, `serviceContext`, `townContext`, `userAgent`, `ipHash` (SHA-256 of IP + daily salt; no raw IP stored), `outOfArea` = true when city is "Other (CA side)" **and** address/message contains `NV`, `Nevada`, `Incline`, `Crystal Bay`, `Stateline` — tagged, never auto-rejected; a human answers.
4. `deliver.ts` — run every configured adapter with `Promise.allSettled`, 8 s timeout each. Result `{ email:'sent'|'skipped'|'failed', webhook:…, store:… }`.
5. Decide: if at least one adapter `sent`, or `LEAD_REQUIRE_DELIVERY !== 'true'`, return success; otherwise return `503` (`?form=unavailable`) so the page shows the phone. Log a one-line JSON record to stdout either way (Vercel function logs are Milton's audit trail even with zero adapters).
6. Rate limit: in-memory map per `ipHash`, 5 submissions / 10 min (best-effort on serverless; real protection is the honeypot + validation).

Lead record shape (`LeadRecord` in `src/lib/leads/types.ts`):

```json
{
  "id": "ld_7k2mq9x4bt3e",
  "receivedAt": "2026-09-19T12:34:56.789Z",
  "name": "Jane Homeowner",
  "phone": "+15305551234",
  "phoneRaw": "(530) 555-1234",
  "email": "jane@example.com",
  "address": "123 Example Ln",
  "city": "Truckee",
  "message": "No hot water since Tuesday",
  "timing": "As soon as possible",
  "urgent": false,
  "sourcePath": "/services/water-heaters/",
  "serviceContext": "water-heaters",
  "townContext": null,
  "outOfArea": false,
  "userAgent": "…",
  "ipHash": "…",
  "site": "brimercon-astro-staging"
}
```

## 3. Delivery adapters (all optional; configured by env vars)

| Adapter | Env vars | Behaviour | Production readiness |
|---|---|---|---|
| **Email** (Resend HTTP API, no SDK — one `fetch`) | `RESEND_API_KEY`, `LEAD_TO_EMAIL` (default `service@brimerplumbing.com`), `LEAD_FROM_EMAIL` (default `Brimer Website <onboarding@resend.dev>`), optional `LEAD_CC_EMAIL` | Subject `New service request — {city} — {name}{ urgent ? ' — URGENT' : ''}`; text + HTML body with every field, `reply-to` = lead email when present. | Works immediately with Resend's test sender for QA. Sending from `@brimerplumbing.com` or another domain Milton controls requires DKIM/SPF DNS records **on that domain**. Do **not** add records to `brimercon.com` in this phase (live zone). Decision D5. |
| **Webhook** (generic JSON POST) | `LEAD_WEBHOOK_URL`, optional `LEAD_WEBHOOK_SECRET` | `POST` the `LeadRecord` as JSON; header `X-Brimer-Signature: sha256=<HMAC(body, secret)>` when a secret is set; 2 attempts. | Lets Milton point leads at: a **GHL inbound webhook** (keeps the SMS follow-up workflow alive without GHL scripts on the page — D6), Zapier/Make, a Google Sheets Apps Script web app, Housecall Pro later. |
| **Store** | `LEAD_STORE=file` + `LEAD_STORE_PATH` (default `.data/leads.jsonl`) | Appends one JSON line per lead. | **Local/QA only** — Vercel's filesystem is ephemeral. `LEAD_STORE=none` on Vercel. Durable options for M4: Vercel Blob (`@vercel/blob`, one dashboard click), Vercel Postgres, or the Sheets webhook above. The adapter interface (`store.ts: append(lead)`) is written so adding Blob is one file. |
| **Log** | always on | One JSON line per attempt to stdout (`vercel logs`). Never contains the raw IP. | Audit trail even with no adapters configured. |

`LEAD_REQUIRE_DELIVERY` — set `true` on Vercel once at least one real adapter is configured. On a bare staging preview with no keys, leave unset so the form still shows the confirmation (the function log is the record) — and say so in `docs/qa/staging.md`.

## 4. How Milton configures the destination (no code changes)

In the **new** Vercel project for this repo (never the live one): Settings → Environment Variables. Set for Preview (and later Production):

1. Pick email: create a free Resend account, create an API key, set `RESEND_API_KEY` and `LEAD_TO_EMAIL=service@brimerplumbing.com`. Until a sending domain is verified, mail arrives from `onboarding@resend.dev` (Resend limits test-sender mail to the account owner's address — for QA, set `LEAD_TO_EMAIL` to the Resend account email; switch to `service@` after domain verification).
2. Optional sheet or pipeline: create a Google Sheets Apps Script web app **or** a GHL inbound webhook **or** a Zapier/Make catch hook; paste its URL into `LEAD_WEBHOOK_URL`; optionally set `LEAD_WEBHOOK_SECRET` and verify the signature on the receiving side.
3. Set `LEAD_STORE=none` and `LEAD_REQUIRE_DELIVERY=true` once step 1 or 2 works.
4. Redeploy (Vercel → Deployments → Redeploy) so the function picks up the variables.
5. Submit a test from the preview URL and check the inbox/sheet and `vercel logs`.

Everything above is reversible and touches only the new project.

## 5. Spam and abuse posture

Honeypot + time trap + strict validation + soft rate limit + same-origin check. No Google reCAPTCHA (removes a third-party script and the "not a robot" friction that can cost real leads from older homeowners). If spam appears after the swap, add Cloudflare Turnstile (`PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET`) — it is invisible for most users and the adapter slot is reserved in `validate.ts`.

## 6. Privacy

Collects only what the form asks. No raw IP stored (hashed with a daily salt). No third-party trackers on staging. The privacy notice text on `/privacy-policy/` is ported from live; references to GHL/reCAPTCHA are removed if the twin does not load them. Lead retention is Milton's policy; the file store is QA-only.

## 7. QA (details in `docs/qa-plan.md` §3)

`scripts/qa-form.mjs` starts a local webhook receiver (`scripts/dev-webhook.mjs`) and runs against a running twin: valid JSON submit → 200 + record in JSONL + webhook received; valid form-encoded submit with `Accept: text/html` → 303 to `/thank-you/?ref=`; honeypot filled → 200 but **no** delivery; missing phone → 400 with field error; `GET` → 405. Writes `docs/qa/form-e2e.md` with timestamps and redacted payloads. A browser pass on the Vercel preview (desktop + mobile viewport) confirms the inline panel and tap-to-call.
