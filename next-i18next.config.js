module.exports = {
  i18n: {
    defaultLocale: 'ua', // Default language
    locales: ['en','ru','ua'], // Available languages
    localeDetection: false,
  },
  defaultNS: 'common', // Дефолтный namespace
  namespaces: ['common', 'product_page','home_page','catalog_page', 'checkout_page'], // Все доступные namespaces
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
};