<template>
  <template v-if="loading">
    <div className="loader-container">
      <MoonLoader />
    </div>
  </template>
  <template v-else>
    <Header />
      <HomePage :active="loading"/>
    <Footer />
  </template>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import Header from './components/Header'
import Footer from './components/Footer'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import './assets/reset.css'
import './assets/style.css'

export default {
  name: 'App',
  data () {
    return {
      loading: true
    }
  },
  components: {
    HomePage,
    Header,
    Footer,
    MoonLoader
  }
}
</script>
