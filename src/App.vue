<template>
  <Header />
  <HomePage />
  <Footer />
</template>

<script>
import HomePage from './pages/HomePage.vue'
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/reset.css'

export default {
  name: 'App',
  components: {
    HomePage,
    Header,
    Footer
  }
}
</script>
