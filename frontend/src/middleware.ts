import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix } from './i18n/routing'

export default createMiddleware({
  locales,
  defaultLocale: 'tr',
  localePrefix,
})

export const config = {
  matcher: ['/', '/(tr|en)/:path*'],
}
