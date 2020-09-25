module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-first-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // ↓↓↓ デフォルトの末尾に追記 ↓↓↓
   modules: [
    '@nuxtjs/axios',
  ],
  axios: {

  },
  plugins: [
    '~/plugins/axios.js'
  ],
  env: {
    QIITA_TOKEN: process.env.a1f36196f9f250713b1d051b7b9bd5b4ada6ef0b
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
}

