import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.piglobalco.com/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      alternates: {
        languages: {
            tr: "https://www.piglobalco.com/tr",
        }
      }
    },
    {
      url: 'https://www.piglobalco.com/en/corporate/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      alternates: {
        languages: {
            tr: "https://www.piglobalco.com/tr/kurumsal/hakkimizda",
        }
      }
    },
    {
      url: 'https://www.piglobalco.com/en/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      alternates: {
        languages: {
            tr: "https://www.piglobalco.com/tr/iletisim",
        }
      }
    },
  ]
}