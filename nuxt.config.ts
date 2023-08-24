// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
    shim: true,
  },
  // imports: {
  // autoImport: false,
  // },
  modules: ['@pinia/nuxt'],
});
