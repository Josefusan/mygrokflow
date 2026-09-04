import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Keep the internal diagram gallery out of the index; allow the rest.
      { userAgent: "*", allow: "/", disallow: ["/diagrams", "/apply/success", "/apply/cancel"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
