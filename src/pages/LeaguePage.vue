<template>
  <main v-if="loading" className="loader-container">
    <MoonLoader />
  </main>
  <main v-else className="main-container">
    <PageTitle text="League" />
    <h1>League {{ $route.params.id }}</h1>
  </main>
</template>

<script>
import PageTitle from '../components/PageTitle'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

export default {
  data() {
    return {
      loading: false,
    }
  },
  components: {
    PageTitle,
    MoonLoader
  }
}
</script>
