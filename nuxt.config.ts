// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  css: ['~/assets/main.css'],

  typescript: {
    strict: false,
    typeCheck: false
  },

  app: {
    head: {
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W2VVV2T6');`,
          type: 'text/javascript',
          tagPosition: 'head'
        },
        {
          innerHTML: `var dataTrafficGuard = dataTrafficGuard || [];
dataTrafficGuard.push(['property', 'tg-023166-001']);
dataTrafficGuard.push(['event','pageview']);
(function() {var tg = document.createElement('script'); tg.type = 'text/javascript'; tg.async = true; tg.src = '//tgtag.io/tg.js?pid=tg-023166-001';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(tg, s);})();`,
          type: 'text/javascript',
          tagPosition: 'bodyOpen'
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Fix & Frei Umzüge und Entrümpelung",
            "url": "https://fix-und-frei.de",
            "logo": "https://fix-und-frei.de/favicon.png"
          })
        }
      ],
      noscript: [
        {
          innerHTML: '<img src="//p.tgtag.io/event?property_id=tg-023166-001&event_name=pageview&no_script=1" width="1" height="1" border="0"/>',
          tagPosition: 'bodyOpen'
        }
      ],
      title: 'Fix & Frei Umzüge und Entrümpelung',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professionelle Entrümpelung und Entsorgung' },
        { name: 'google-site-verification', content: 'OT31FGYO6EjNKwrLSMDUpPg23aDZ4_2gpgk1sfK_jig' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: 'https://fix-und-frei.de/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'https://fix-und-frei.de/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '144x144', href: 'https://fix-und-frei.de/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://fix-und-frei.de/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '192x192', href: 'https://fix-und-frei.de/favicon.png' }
      ]
    }
  },

  // Sitemap and Robots configuration
  runtimeConfig: {
    public: {
      siteUrl: 'https://fix-und-frei.de'
    }
  }
})
