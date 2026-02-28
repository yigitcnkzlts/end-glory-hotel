import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://endgloryhotel.com'
  const locales = ['tr', 'en']

  const routes = ['', '/rooms', '/services', '/restaurant', '/meetings', '/gallery', '/contact', '/about']

  const urls: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    routes.forEach((route) => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return urls
}
