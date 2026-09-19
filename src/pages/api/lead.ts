import type { APIRoute } from "astro";
import { buildRecord, deliver, safeSourcePath, validate, type LeadInput } from "@/lib/leads";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

// The only route in the project that is not prerendered.
export const prerender = false;

const wantsJson = (request: Request) => (request.headers.get("accept") ?? "").includes("application/json");

/**
 * A browser posting this form without JavaScript must never be shown a raw JSON body
 * (audit H5). Errors render a real page whose primary action is the phone number.
 */
function htmlResponse(status: number, heading: string, body: string, backTo: string) {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${heading} | Brimer Plumbing</title>
<style>
:root{--ink:#12181f;--soft:#46535f;--accent:#b4441f;--brand:#12466e}
body{margin:0;padding:2rem 1rem;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;color:var(--ink);line-height:1.6}
main{max-width:34rem;margin-inline:auto}
h1{font-size:1.5rem;line-height:1.2}
a.call{display:flex;align-items:center;justify-content:center;min-height:3.25rem;margin:1.25rem 0 .75rem;background:var(--accent);color:#fff;font-size:1.2rem;font-weight:700;text-decoration:none;border-radius:8px}
a.back{color:var(--brand)}
</style>
</head>
<body><main>
<h1>${heading}</h1>
<p>${body}</p>
<a class="call" href="tel:${PHONE_TEL}">Call ${PHONE_DISPLAY}</a>
<p><a class="back" href="${backTo}">Go back and try again</a></p>
</main></body>
</html>`;
  return new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

export const GET: APIRoute = ({ request }) =>
  wantsJson(request)
    ? new Response(JSON.stringify({ ok: false, error: "method_not_allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", Allow: "POST" },
      })
    : htmlResponse(405, "Use the form to send a request", `This address only accepts form submissions. Call ${PHONE_DISPLAY} and we will take the details over the phone.`, "/request-service/");

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const json = wantsJson(request);

  // Same-origin check. Absent headers are allowed so a no-JS submit still works.
  const origin = request.headers.get("origin") ?? request.headers.get("referer");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return json
          ? new Response(JSON.stringify({ ok: false, error: "cross_origin" }), { status: 403, headers: { "Content-Type": "application/json" } })
          : htmlResponse(403, "That request could not be accepted", `Please send the form from our own site, or call ${PHONE_DISPLAY}.`, "/request-service/");
      }
    } catch {
      /* unparseable origin, fall through to validation */
    }
  }

  let input: LeadInput = {};
  try {
    const type = request.headers.get("content-type") ?? "";
    if (type.includes("application/json")) {
      input = (await request.json()) as LeadInput;
    } else {
      input = Object.fromEntries(await request.formData()) as LeadInput;
    }
  } catch {
    return json
      ? new Response(JSON.stringify({ ok: false, error: "unreadable_body" }), { status: 400, headers: { "Content-Type": "application/json" } })
      : htmlResponse(400, "We could not read that request", `Please try again, or call ${PHONE_DISPLAY}.`, "/request-service/");
  }

  const sourcePath = safeSourcePath(input.source_path);
  const result = validate(input);

  // Automated submission: look successful, deliver nothing, teach the bot nothing.
  if (result.silentDrop) {
    return json
      ? new Response(JSON.stringify({ ok: true, id: null }), { status: 200, headers: { "Content-Type": "application/json" } })
      : new Response(null, { status: 303, headers: { Location: "/thank-you/" } });
  }

  if (!result.ok) {
    return json
      ? new Response(JSON.stringify({ ok: false, errors: result.errors }), { status: 400, headers: { "Content-Type": "application/json" } })
      : new Response(null, { status: 303, headers: { Location: `${sourcePath}?form=error#lead-form` } });
  }

  const lead = buildRecord(result.values, {
    sourcePath,
    serviceContext: input.service_context,
    townContext: input.town_context,
    userAgent: request.headers.get("user-agent"),
    ip: clientAddress ?? null,
  });

  const { deliveries, accepted } = await deliver(lead);

  if (!accepted) {
    return json
      ? new Response(JSON.stringify({ ok: false, error: "delivery_unavailable", deliveries }), { status: 503, headers: { "Content-Type": "application/json" } })
      : htmlResponse(503, "We could not send that just now", `Nothing was lost on your side, but we would rather you reached us than waited. Please call ${PHONE_DISPLAY}.`, sourcePath);
  }

  return json
    ? new Response(JSON.stringify({ ok: true, id: lead.id, deliveries }), { status: 200, headers: { "Content-Type": "application/json" } })
    : new Response(null, { status: 303, headers: { Location: `/thank-you/?ref=${lead.id}` } });
};
