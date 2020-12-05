<template>
  <h1>1</h1>
  <div v-if="!managerId">
    <ErrorPage msg="Missing manager ID" />
  </div>
</template>

<script>
import ErrorPage from './ErrorPage.vue'

export default {
  name: 'Home',
  components: {
    ErrorPage
  },
  data() {
    return {
      managerId: process.env.VUE_APP_MANAGER_ID
    }
  }
}
</script>
