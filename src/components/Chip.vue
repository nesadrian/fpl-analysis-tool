<template>
  <template v-if="timePlayed">
    <section className="chip-container chip-container--played">
      <section className="chip__title-container">
        <h1>{{ name }}</h1>
      </section>
      <section className="chip__data-container">
        <h1>Played</h1>
        <h1>Gameweek {{ gameweekPlayed }}</h1>
      </section>
    </section>
  </template>
  <template v-else>
    <section className="chip-container chip-container--available">
      <section className="chip__title-container">
        <h1>{{ name }}</h1>
      </section>
      <section className="chip__data-container">
        <h1>Available</h1>
      </section>
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
