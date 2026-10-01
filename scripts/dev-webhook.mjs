#!/usr/bin/env node
// Local webhook receiver for lead QA. Stands in for the Zapier or Housecall Pro endpoint
// Milton will configure, so the delivery path can be tested without a real one.
//
//   node scripts/dev-webhook.mjs            # listens on 8788, appends to .data/webhook-received.jsonl

import { createServer } from "node:http";
import { appendFile, mkdir } from "node:fs/promises";

const PORT = Number(process.env.DEV_WEBHOOK_PORT || 8788);
const OUT = process.env.DEV_WEBHOOK_PATH || ".data/webhook-received.jsonl";

await mkdir(OUT.split("/").slice(0, -1).join("/") || ".", { recursive: true });

createServer((req, res) => {
  if (req.method !== "POST") {
    res.writeHead(405).end("POST only");
    return;
  }
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    await appendFile(OUT, body + "\n");
    let id = "unknown";
    try {
      id = JSON.parse(body).id ?? "unknown";
    } catch {
      /* log the raw body anyway */
    }
    console.log(`received lead ${id} (signature: ${req.headers["x-brimer-signature"] ? "present" : "none"})`);
    res.writeHead(200, { "Content-Type": "application/json" }).end('{"ok":true}');
  });
}).listen(PORT, "127.0.0.1", () => console.log(`dev-webhook listening on http://127.0.0.1:${PORT}/hook -> ${OUT}`));
