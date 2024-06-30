import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.piglobalco.com/',
      lastModified: new Date(),
      alternates: {
        languages: {
            tr: "https://www.piglobalco.com/tr",
        }
      }
    },
    {
      url: 'https://www.piglobalco.com/en/corporate/about-us',
      lastModified: new Date(),
      alternates: {
        languages: {
            tr: "https://www.piglobalco.com/tr/kurumsal/hakkimizda",
        }
      }
    },
    {
      url: 'https://www.piglobalco.com/en/contact',
      lastModified: new Date(),
      alternates: {
        languages: {
            tr: "https://www.piglobalco.com/tr/iletisim",
        }
      }
    },
  ]
}