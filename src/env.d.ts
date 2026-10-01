/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_INDEXABLE?: string;
  readonly PUBLIC_CANONICAL_ORIGIN?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly RESEND_API_KEY?: string;
  readonly LEAD_TO_EMAIL?: string;
  readonly LEAD_FROM_EMAIL?: string;
  readonly LEAD_CC_EMAIL?: string;
  readonly LEAD_WEBHOOK_URL?: string;
  readonly LEAD_WEBHOOK_SECRET?: string;
  readonly LEAD_STORE?: "file" | "none";
  readonly LEAD_STORE_PATH?: string;
  readonly LEAD_REQUIRE_DELIVERY?: string;
  readonly LEAD_SITE_LABEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
