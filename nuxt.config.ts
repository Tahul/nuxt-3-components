import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  modules: ['nuxt-windicss'],
  components: [
    {
      path: 'components/prefetch',
      prefetch: true
    },
    {
      path: 'components/preload',
      preload: true
    },
    {
      path: 'components/global-true',
      global: true
    },
    {
      path: 'components/global-false',
      global: false
    },
    {
      path: 'components/default'
    }
  ]
})
