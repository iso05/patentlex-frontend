export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/admin/*'],
    },
    sitemap: 'https://patentlex.uz/sitemap.xml',
  }
}
