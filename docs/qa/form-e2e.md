# Lead form end-to-end — 2026-09-22

Run: 2026-09-22 17:32 UTC (10:32 PDT). Result: **14/14 checks passed.**

## Commands

```bash
npm run build
node scripts/dev-webhook.mjs &                      # fake lead receiver on :8788
LEAD_STORE=file LEAD_STORE_PATH=.data/leads.jsonl \
  LEAD_WEBHOOK_URL=http://127.0.0.1:8788/hook npm run serve &   # :4322
node scripts/qa-form.mjs
```

Payloads used the fixture name "QA Tester", phone `530-555-0134`, message
"No hot water since Tuesday, QA test submission.", town Truckee,
source_path `/services/water-heaters/`. No real customer data touched.

## Results

| # | Case | Expect | Got |
|---|---|---|---|
| 1 | Valid JSON submit | `200 { ok: true, id, deliveries }` | 200, id `ld_cf0a05e1710b` |
| 2 | Delivery channels | at least one real channel | `{"email":"skipped","webhook":"sent","store":"sent"}` |
| 3 | Lead written to file store | `.data/leads.jsonl` grows | yes |
| 4 | Lead received by webhook | matching id at `:8788/hook` | yes |
| 5 | Form-encoded, no JS | `303` to `/thank-you/?ref=<id>` | 303, `location /thank-you/?ref=ld_aad6e18daad5` |
| 6 | Confirmation page renders | shows the phone | yes |
| 7 | Honeypot (`company_website` set) | `200`, nothing delivered | 200, no store/webhook write |
| 8 | Honeypot delivery | silent drop | confirmed |
| 9 | Time trap (`ts` 500 ms old) | silent drop | confirmed |
| 10 | Missing phone | `400` with field error | 400 |
| 11 | Missing message | `400` with field error | 400 |
| 12 | `GET /api/lead/` from browser | 405 HTML page with call button | 405, `content-type text/html; charset=utf-8` |
| 13 | `GET /api/lead/` with `Accept: application/json` | 405 JSON | 405 JSON |
| 14 | Cross-site `source_path` | accepted but discarded | stored `sourcePath` `/` |

## Notes

- `RESEND_API_KEY` not set in this environment, so email delivery was `skipped`
  (expected; webhook + file store both confirmed the lead).
- `LEAD_REQUIRE_DELIVERY` not set, so the delivery-failure 503 case from the QA
  plan was not exercised; it needs a down webhook plus the env flag.
- Test artifacts (`.data/leads.jsonl`, `.data/webhook-received.jsonl`) are
  git-ignored scratch; the fixture ids above are test-only.
- Manual repeat on the Vercel preview (desktop + 390px with confirmation
  screenshot) is still to do once the lakefront similarity rewrite lands and the
  branch is redeployed.
