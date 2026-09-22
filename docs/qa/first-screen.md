# First-screen gate — 2026-09-22

## Static marker check: PASS

`scripts/qa-first-screen-static.mjs` (new, committed): every key template's
built HTML carries the `data-fs` markers `h1`, `area`, `call`, `hours`, `trust`
exactly once each, in that document order, with at least one
`tel:+15305870733` link.

| Template | Markers in order | tel: links |
|---|---|---|
| `/` | yes | 6 |
| `/services/water-heaters/` | yes | 5 |
| `/service-areas/truckee/` | yes | 6 |
| `/service-areas/martis-valley/` | yes | 6 |
| `/contact/` | yes | 9 |
| `/membership/` | yes | 9 |
| `/resources/` | yes | 6 |
| `/404.html` | yes | 4 |

## Playwright run: BLOCKED in this sandbox

`tests/first-screen.spec.ts` (`npm run qa:first-screen`) could not run here:

1. No Playwright browser bundle and no system Chrome; the config's
   `channel: "chrome"` looks at `/opt/google/chrome/chrome`. Symlinked the
   sandbox's Chromium (`/opt/meta-chromium/chrome`, 152.0.7977.82) there.
2. Chrome 152 then refused loopback with
   `net::ERR_BLOCKED_BY_LOCAL_NETWORK_ACCESS_CHECKS` for
   `http://127.0.0.1:4322/` (egress-proxy environment).
3. `--disable-features=LocalNetworkAccessChecks` did not clear it, and the same
   Chromium binary produces zero output for `--dump-dom` even against
   `example.com`: headless rendering is broken in this sandbox.

The FirstScreen component and its CSS are unchanged since the M0 green run, and
all new pages reuse it, so pixel positions are not expected to have moved. **The
visual gate still needs a real run**: on the Vercel preview with
`BASE_URL=https://<preview> VERCEL_PROTECTION_BYPASS=<token>
npm run qa:first-screen`, at 390x844 and 1440x900, with screenshots referenced
here.
