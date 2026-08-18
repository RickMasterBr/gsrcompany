import { SITE_URL } from "@/data/siteConfig";

// Public, indexable routes only. /contatos is intentionally excluded — it's
// a QR-code-only link-in-bio page kept noindex, not meant to compete with
// this site's own pages in search results.
const staticRoutes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
];

export default function sitemap() {
  return staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
