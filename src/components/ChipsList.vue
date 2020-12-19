<template>
  <section className="chips-container main__card">
    <li v-for="chip in chips" :key="chip.name">
      <Chip :name="chip.name" :timePlayed="chip.time" :gameweekPlayed="chip.event" />
    </li>
  </section>
</template>

<script>
import ChipListItem from './ChipListItem'

export default {
  props: {
    chips: Array,
    freeTransfers: Number
  },
  components: {
    ChipListItem
  }
}
</script>
