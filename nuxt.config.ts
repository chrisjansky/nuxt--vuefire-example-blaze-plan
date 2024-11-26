export default defineNuxtConfig({
  // Having SSR allows us to use `nuxt generate`, turn it off if you don't care
  ssr: true,
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Nuxt + VueFire Blaze Plan Example',
      link: [
        {
          href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css',
          rel: 'stylesheet',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/vuefire.svg',
        },
      ],
    },
  },

  css: ['~/assets/style.css'],

  nitro: {
    prerender: {
      // these routes are not dependent on any data and can be prerendered
      // it's a good idea to pre render all routes that you can
      routes: ['/', '/analytics'],
    },
    preset: 'firebase',

    // for the upcoming preset
    firebase: {
      gen: 2,
      nodeVersion: '20',
    },
  },

  modules: ['nuxt-vuefire', '@vueuse/nuxt'],

  vuefire: {
    emulators: {
      // uncomment this line to run the application in production mode without emulators during dev
      // enabled: false,
      auth: {
        options: {
          disableWarnings: true,
        },
      },
    },
    auth: {
      enabled: true,
      sessionCookie: true,
    },

    appCheck: {
      provider: 'ReCaptchaV3',
      // site key, NOT secret key
      key: '6LfQy4gqAAAAAGWxzKamZcCu38HOSsAJ-ioHaPoN',
      isTokenAutoRefreshEnabled: true,
    },

    config: {
      apiKey: 'AIzaSyB1Uku_Qa6fCVFNNXUxota6VJDdNN05Vss',
      authDomain: 'kometa-dev-2024-app.web.app',
      databaseURL: 'https://kometa-dev-2024-app-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'kometa-dev-2024-app',
      storageBucket: 'kometa-dev-2024-app.firebasestorage.app',
      messagingSenderId: '549272748425',
      appId: '1:549272748425:web:ea53ea11473f4f5e76e158',
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  // Customize this to your needs and try to server side render only what is needed
  // https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
  routeRules: {
    // Make some pages client only (since we have an SPA)
    // useful for authenticated pages that require the user to be logged in to be
    // displayed
    '/admin': { ssr: false },
    '/login': { ssr: false },
    '/analytics': { ssr: false },
    // you don't need to add ssr: true to any route, it's the default
    // '/users': { ssr: true },
    // '/posts/new': { ssr: true },
    // '/emoji-panel': { swr: true },
  },
})
