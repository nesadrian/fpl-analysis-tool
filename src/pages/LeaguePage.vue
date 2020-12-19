<template>
  <main v-if="loading" className="loader-container">
    <MoonLoader />
  </main>
  <main v-else className="main-container">
    <PageTitle text="League" />
    <h1>League {{ dataLeague }}</h1>
  </main>
</template>

<script>
import PageTitle from '../components/PageTitle'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

export default {
  data() {
    return {
      loading: false,
      id: this.$route.params.id
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      await this.$store.dispatch('fetchDataLeague', this.id)
      this.loading = false
    }
  },
  components: {
    PageTitle,
    MoonLoader
  },
  computed: {
    dataLeague() {
      return this.$store.getters.getDataLeague(this.id)
    }
  }
}
</script>
