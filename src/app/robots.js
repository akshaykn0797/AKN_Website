const BASE = 'https://akshaynayak.dev';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
