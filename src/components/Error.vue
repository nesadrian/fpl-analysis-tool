<template>
  <h1>Error</h1>
  <p>{{ msg }}</p>
</template>

<script>
  export default {
    name: 'Error',
    props: {
      msg: String
    }
  }
</script>
