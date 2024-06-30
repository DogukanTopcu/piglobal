import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // all search engine bots
      allow: '/', // allow all page routes
      disallow: ["/admin", '/private/'], // not allow admin pages
    },
    sitemap: 'https://www.piglobalco.com/sitemap.xml',
  }
}