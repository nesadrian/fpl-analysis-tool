<template>
  <main>
    <div v-if="!managerId">
      <Error msg="Missing manager ID" />
    </div>
    <div v-else>
      <h1>Main</h1>
    </div>
  </main>
</template>

<script>
import Error from '../components/Error'

export default {
  name: 'HomePage',
  components: {
    Error,
  },
  data() {
    return {
      managerId: process.env.VUE_APP_MANAGER_ID
    }
  }
}
</script>
