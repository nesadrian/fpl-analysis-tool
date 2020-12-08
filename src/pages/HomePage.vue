<template>
  <main>
    <Card />
  </main>
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'HomePage',
  data() {
    return {
      loading: false
    }
  },
  components: {
    Card
  },
  props: {
    managerId: String,
    dataManagerGeneral: Object
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
