<template>
  <section className="chips-container main__card">
    <li v-for="chip in chips" :key="chip.name">
      <ChipsListItem :name="chip.name" :timePlayed="chip.time" :gameweekPlayed="chip.event" />
    </li>
  </section>
</template>

<script>
import ChipsListItem from './ChipsListItem'

export default {
  props: {
    chips: Array,
    freeTransfers: Number
  },
  components: {
    ChipsListItem
  }
}
</script>
