export default {
  target: 'static',
  ssr: false,

  head: {
    title: 'Nguyễn Thanh Lãm',
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL,
      },
      { hid: 'og:type', property: 'og:type', content: 'Website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '',
      },
    ],
    link: [
      { rel: 'canonical', href: process.env.BASE_URL },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  server: {
    port: process.env.NODE_ENV === 'development' ? 1702 : 3000,
  },

  css: ['@/assets/font/font.css','@/assets/scss/all.scss'],

  plugins: [
    {
      src: '~/plugins/icon.js',
    },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', 'nuxt-gsap-module', '@nuxtjs/google-analytics'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv', 'svg-to-vue-component/nuxt'],

  axios: {
    baseURL: process.env.API_URL,
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  googleAnalytics: {
    id: '',
  },

  gsap: {
    extraPlugins: {
      cssRule: true,
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      slowMo: true,
    },
  },
}
