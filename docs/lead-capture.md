# Lead capture — in-house form replacing GoHighLevel forms

Goal (kickoff #7): contact and lead forms wired to something Milton owns, with a working end-to-end path on staging and a confirmation. GoHighLevel is **not** cancelled in this phase and nothing on live changes.

Live today: forms on home, contact, request-service and every service and town page post to GoHighLevel (LeadConnector) with reCAPTCHA v3. A Granola note records a real customer hitting a submission error. The twin keeps the user-facing behaviour, removes the GHL dependency from the page, and lets Milton choose where leads go.

**Calling is the primary action** (`PLAN.md` §3b). This form is the fallback for people who will not phone, so it is short and it never competes with the call button.

## 1. Form (client)

Component `src/components/LeadForm.astro`, rendered on `/`, `/contact/`, `/request-service/`, all `/services/*` and all `/service-areas/*`.

Short by design (audit H3). Three required fields; everything else optional. Every extra required field costs leads, and Brimer can get the rest on the phone.

| Field | `name` | Type | Required | Validation |
|---|---|---|---|---|
| Your name | `name` | text | **yes** | 2 to 100 chars |
| Phone | `phone` | tel | **yes** | 10 to 11 digits after stripping punctuation; US area code |
| What is wrong? | `message` | textarea | **yes** | 5 to 3000 chars |
| Email | `email` | email | no | `x@y.z`, ≤ 200 chars |
| Service address | `address` | text | no | ≤ 200 chars |
| Town | `town` | text + `<datalist>` | no | Free text. The datalist offers all 24 towns from `src/data/towns.ts`; **prefilled and pre-selected on a town page**. Free text so nobody is blocked by a missing option. |
| (hidden) | `source_path` | hidden | — | Page path. Server validates it is a same-site path: must start with `/`, no scheme, no `//` (audit H5). |
| (hidden) | `service_context` | hidden | — | e.g. `water-heaters` |
| (hidden) | `town_context` | hidden | — | e.g. `truckee` |
| (hidden) | `company_website` | text, visually hidden, `tabindex="-1"` | — | **honeypot**, must be empty |
| (hidden) | `ts` | hidden | — | Render timestamp set by the enhancer; server rejects < 3 s or > 24 h. With JS off the field is absent and the time trap is skipped. |

Dropped from the live form: **preferred timing** (audit H3). It shaped no dispatch decision and added a field. Urgency belongs in "what is wrong", and anything genuinely urgent should be a phone call, which the page says.

Markup rules: a real `<label for>` on every control; `inputmode="tel"` and `autocomplete` on phone and name; error summary in an `aria-live="polite"` region; submit reads "Send request"; no reCAPTCHA; no third-party scripts.

### Progressive enhancement

- **No JavaScript:** `<form method="post" action="/api/lead/">`. Success → `303` to `/thank-you/?ref=<leadId>`. Failure → `303` back to `<source_path>?form=error#lead-form`, or `?form=unavailable` when delivery failed, so the page can lead with the phone number.
- **With JavaScript** (≤ 5 KB, `src/scripts/lead-form.ts`): intercepts submit, posts to `/api/lead/` with `Accept: application/json`, disables the button while pending, then swaps in the confirmation panel or the error panel. Both panels carry the call button.

The endpoint path is always written **with a trailing slash** (`/api/lead/`, audit H4) to match `trailingSlash: 'always'`. A POST to `/api/lead` would take a redirect, and a redirected POST is where form submissions quietly die.

## 2. Endpoint `POST /api/lead/`

`src/pages/api/lead.ts`, `export const prerender = false`. Runs as a Vercel serverless function via `@astrojs/vercel`; locally via `@astrojs/node` or `astro dev`.

Accepts `application/x-www-form-urlencoded`, `multipart/form-data` or `application/json`. `GET` returns `405`.

**Response format follows the request** (audit H5). If `Accept` includes `application/json`, respond JSON. Otherwise respond with a **real HTML page** carrying the same layout, an apology, and a full-width `Call 530-587-0733` button — never a bare JSON error body in a browser window. Same rule for `405`, `400` and `503`.

Same-origin check: when `Origin` or `Referer` is present its host must match the request host. `source_path` is validated as a same-site path and is otherwise discarded.

Pipeline (`src/lib/leads/`):

1. `parse.ts` — body to a plain object regardless of encoding.
2. `validate.ts` — rules above. Honeypot filled or time trap tripped: respond as success but deliver nothing. Phone normalised to E.164, raw string kept.
3. `enrich.ts` — `id` (`ld_` + 12 chars), `receivedAt`, `sourcePath`, `serviceContext`, `townContext`, `userAgent`, `ipHash` (SHA-256 of IP plus a daily salt; no raw IP stored).
4. `deliver.ts` — every configured adapter via `Promise.allSettled`, 8 s timeout each.
5. Decide (audit H2): if **no delivery channel accepted the lead** and `LEAD_REQUIRE_DELIVERY` is true, return `503` and render the call-us page. Never show "Request received" for a lead that went nowhere.
6. Always write one JSON line to stdout, so Vercel function logs hold a record even when every adapter fails.
7. Soft rate limit: 5 submissions per `ipHash` per 10 minutes.

Lead record (`src/lib/leads/types.ts`):

```json
{
  "id": "ld_7k2mq9x4bt3e",
  "receivedAt": "2026-09-19T12:34:56.789Z",
  "name": "Jane Homeowner",
  "phone": "+15305551234",
  "phoneRaw": "(530) 555-1234",
  "email": "jane@example.com",
  "address": "123 Example Ln",
  "town": "Truckee",
  "message": "No hot water since Tuesday",
  "sourcePath": "/services/water-heaters/",
  "serviceContext": "water-heaters",
  "townContext": null,
  "userAgent": "...",
  "ipHash": "...",
  "site": "brimercon-astro-staging"
}
```

## 3. Delivery channels

**A file store is not delivery** (audit H2). `LEAD_STORE=file` writes JSONL for local QA only; Vercel's filesystem is ephemeral, so a lead written there in production is gone. It never satisfies `LEAD_REQUIRE_DELIVERY`.

| Channel | Env vars | Counts as delivery | Notes |
|---|---|---|---|
| **Email** (Resend HTTP API, one `fetch`, no SDK) | `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`, optional `LEAD_CC_EMAIL` | yes | Subject `New service request - {town} - {name}`. Full body, `reply-to` set to the lead's email when given. Sending from a Brimer domain needs DKIM/SPF on a domain Milton controls; **not** on `brimercon.com`, which is the live zone (decision D5). |
| **Webhook** (generic JSON POST) | `LEAD_WEBHOOK_URL`, optional `LEAD_WEBHOOK_SECRET` | yes | `X-Brimer-Signature: sha256=<HMAC>` when a secret is set; 2 attempts. Intended targets: **Zapier or Make into a Google Sheet**, or **Housecall Pro**. |
| **Store** | `LEAD_STORE=file`, `LEAD_STORE_PATH` | **no** | QA scaffolding. Set `LEAD_STORE=none` on Vercel. Durable options for M4: Vercel Blob, Vercel Postgres, or the Sheet via the webhook. |
| **Log** | always on | no | One JSON line per attempt to stdout. |

**No new GoHighLevel webhook** (audit H7, decision D6). GHL belongs to the outgoing agency; pointing the new site's leads into an account Brimer does not own would rebuild the dependency this project exists to remove. GHL is not cancelled and live is untouched — the twin simply does not depend on it.

`LEAD_REQUIRE_DELIVERY` **defaults to true**. Two independent channels (email plus Sheet or HCP) must be live and tested before the swap, so one provider outage cannot silently swallow a lead.

### Ownership

| Thing | Owner today | After the swap |
|---|---|---|
| GoHighLevel account and webhooks | Outgoing agency | Not used by the twin; Milton decides separately whether to cancel |
| Resend account and API key | — | Milton |
| Zapier/Make and the Google Sheet, or Housecall Pro | — | Milton |
| Vercel project and env vars | — | Milton |
| Lead records | GHL (agency-controlled) | Milton's inbox plus Milton's Sheet or HCP |

Also recorded in `docs/swap-runbook.md`.

## 4. How Milton configures the destination (no code changes)

In the **new** Vercel project for this repo, never the live one: Settings → Environment Variables.

1. **Email.** Create a Resend account and an API key. Set `RESEND_API_KEY` and `LEAD_TO_EMAIL`. Until a sending domain is verified, Resend's test sender only delivers to the account owner's own address, so set `LEAD_TO_EMAIL` to that address for QA and switch to `service@brimerplumbing.com` after verification.
2. **Second channel.** Create a Zapier or Make catch hook that appends a row to a Google Sheet Milton owns (or a Housecall Pro intake endpoint). Paste the URL into `LEAD_WEBHOOK_URL`. Optionally set `LEAD_WEBHOOK_SECRET` and verify the signature on the receiving side.
3. Set `LEAD_STORE=none`. Leave `LEAD_REQUIRE_DELIVERY=true`.
4. Redeploy so the function picks up the variables.
5. Submit a test from the preview URL and confirm it arrives in both the inbox and the Sheet, then check `vercel logs`.

All reversible, all inside the new project.

## 5. Spam and abuse

Honeypot, time trap, strict validation, soft rate limit, same-origin check. No Google reCAPTCHA: it is a third-party script on every page and it costs real leads from older homeowners. If spam appears after the swap, add Cloudflare Turnstile (`PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET`); the adapter slot is reserved in `validate.ts`.

## 6. Privacy

Only what the form asks. No raw IP stored. No third-party trackers on staging. `/privacy-policy/` is ported from live with GHL and reCAPTCHA references removed if the twin does not load them. Retention is Milton's policy; the file store is QA only.

## 7. QA

`docs/qa-plan.md` §4 lists the cases: valid JSON, valid form-encoded with no JS, honeypot, time trap, missing phone, missing message, `GET`, delivery-failure-with-`LEAD_REQUIRE_DELIVERY`, and a browser pass on the preview at desktop and 390px.
