<template>
  <template v-if="loading">
    <div className="loader-container">
      <MoonLoader />
    </div>
  </template>
  <template v-else>
    <h1>{{ data }}</h1>
    <Header />
    <HomePage :managerId=managerId />
    <Footer />
  </template>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import Header from './components/Header'
import Footer from './components/Footer'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { getManagerDataGeneral } from './api'

export default {
  name: 'App',
  data () {
    return {
      loading: false,
      managerId: process.env.VUE_APP_MANAGER_ID,
    }
  },
  components: {
    HomePage,
    Header,
    Footer,
    MoonLoader
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      this.loading = true
      const data = await getManagerDataGeneral(this.managerId)
      console.log(data)
      this.loading = false
    }
  }
}
</script>
