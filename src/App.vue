<template>
  <template v-if="loading">
    <div className="loader-container">
      <MoonLoader />
    </div>
  </template>
  <template v-else>
    <Sidebar />
    <router-view></router-view>
  </template>
</template>

<script>
import Sidebar from './components/Sidebar'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

export default {
  name: 'App',
  data () {
    return {
      loading: false,
      managerId: process.env.VUE_APP_MANAGER_ID,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      await this.$store.dispatch('fetchDataManagerGeneral')
      this.loading = false
    }
  },
  components: {
    Sidebar,
    MoonLoader
  },
}
</script>
