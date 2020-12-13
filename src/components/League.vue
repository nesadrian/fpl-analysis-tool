<template>
  <h1>{{ name }}</h1>
  <h1>{{ rank }}</h1>
  <h1>{{ rank - lastRank }}</h1>
</template>

<script>
export default {
  props: {
    name: String,
    rank: Number,
    lastRank: Number
  }
}
</script>
