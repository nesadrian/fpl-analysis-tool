<template>
  <main v-if="loading" className="loader-container">
    <MoonLoader />
  </main>
  <main v-else className="main-container">
    <PageTitle text="Leagues" />
    <section>
      <Leagues :leagues="this.dataClassicLeagues"/>
    </section>
  </main>
</template>

<script>
import PageTitle from '../components/PageTitle'
import Leagues from '../components/Leagues'
import { sortLeaguesPrivate } from '../helpers'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

export default {
  data() {
    return {
      loading: false,
    }
  },
  components: {
    PageTitle,
    Leagues,
    MoonLoader
  },
  methods: {
    async fetchData() {
      this.loading = true
      await this.$store.dispatch('fetchDataManagerGeneral')
      this.loading = false
    }
  },
  computed: {
    dataClassicLeagues() {
      const leagues = this.$store.getters.getDataManagerGeneral.leagues.classic;
      if(leagues.length > 0) {
        return sortLeaguesPrivate(leagues)
      }
      return null
    },
  }
}
</script>
