// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})