<template>
  <h1>Error</h1>
  <p>{{ msg }}</p>
</template>

<script>
  export default {
    name: 'ErrorPage',
    props: {
      msg: String
    }
  }
</script>
