<template>
  <h1>{{ name }}</h1>
  <h1>{{ timePlayed }}</h1>
  <h1>{{ gameweekPlayed }}</h1>
</template>

<script>
export default {
  props: {
    name: String,
    timePlayed: String,
    gameweekPlayed: Number
  }
}
</script>
