<template>
  <template v-if="timePlayed">
    <section className="chip-container">
      <section className="chip__title-container">
        <h1>{{ this.formattedName }}</h1>
      </section>
      <section className="chip__data-container  chip-container--played">
        <h1>Played</h1>
        <h1>Gameweek {{ gameweekPlayed }}</h1>
      </section>
    </section>
  </template>
  <template v-else>
    <section className="chip-container">
      <section className="chip__title-container">
        <h1>{{ formattedName }}</h1>
      </section>
      <section className="chip__data-container chip-container--available">
        <h1>Available</h1>
      </section>
    </section>
  </template>
</template>

<script>
import { formatChipName } from '../helpers'

export default {
  props: {
    name: String,
    timePlayed: String,
    gameweekPlayed: Number
  },
  data: function() {
    return {
      formattedName: formatChipName(this.name)
    }
  }
}
</script>
