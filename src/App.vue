<template>
  <template v-if="loading">
    <div className="loader-container">
      <MoonLoader />
    </div>
  </template>
  <template v-else>
    <Sidebar />
    <HomePage :managerId=managerId />
  </template>
</template>

<script>
import HomePage from './pages/HomePage.vue'
import Sidebar from './components/Sidebar'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

export default {
  name: 'App',
  data () {
    return {
      managerId: process.env.VUE_APP_MANAGER_ID,
    }
  },
  components: {
    HomePage,
    Sidebar,
    MoonLoader
  },
}
</script>
