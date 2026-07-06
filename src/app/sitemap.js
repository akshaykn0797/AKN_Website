const BASE = 'https://akshaynayak.dev';

export default function sitemap() {
  const now = new Date();
  return ['/', '/publications', '/academic'].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
