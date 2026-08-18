import { SITE_URL } from "@/data/siteConfig";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/contatos"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
