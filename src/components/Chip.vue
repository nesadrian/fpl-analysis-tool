<template>
  <template v-if="timePlayed">
    <section className="chip-container">
      <h1>{{ name }}</h1>
      <h1>Played</h1>
      <h1>Gameweek {{ gameweekPlayed }}</h1>
    </section>
  </template>
  <template v-else>
    <section className="chip-container">
      <h1>{{ name }}</h1>
      <h1>Available</h1>
    </section>
  </template>
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
