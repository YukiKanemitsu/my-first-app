<template>
  <section class="container">
    <div>
      <h2>
        ログインページ
      </h2>
      <p>
        <button type="button" @click="login">
          ログイン
        </button>

        <br>

        <nuxt-link to="/">
          トップページへ戻る
        </nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
import Cookies from 'universal-cookie'

export default {
	methods: {
		login() {
			const cookies = new Cookies()
      cookies.set('credential', 'true', { maxAge: 90 })
      this.$router.push('/')
		}
	}
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

