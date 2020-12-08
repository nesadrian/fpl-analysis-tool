<template>
  <template v-if="loading">
    <div className="loader-container">
      <MoonLoader />
    </div>
  </template>
  <template v-else>
    <Header :firstname=data.player_first_name :lastname=data.player_last_name />
    <HomePage :managerId=managerId :dataManagerGeneral="data"/>
    <Footer />
  </template>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import Header from './components/Header'
import Footer from './components/Footer'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { getDataManagerGeneral } from './api'

export default {
  name: 'App',
  data () {
    return {
      loading: false,
      managerId: process.env.VUE_APP_MANAGER_ID,
      data: undefined
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
      this.data = await getDataManagerGeneral(this.managerId)
      this.loading = false
    }
  }
}
</script>
