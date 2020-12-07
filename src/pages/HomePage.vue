<template>
  <main>
    <div v-if="!managerId">
      <Error msg="Missing manager ID" />
    </div>
    <div v-else>
      <h1>{{ managerId }}</h1>
    </div>
  </main>
</template>

<script>
import Error from '../components/Error'

export default {
  name: 'HomePage',
  data() {
    return {
      loading: false
    }
  },
  components: {
    Error,
  },
  props: {
    managerId: String
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      
    }
  }
}
</script>
