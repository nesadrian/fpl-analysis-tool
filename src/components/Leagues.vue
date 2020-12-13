<template>
  <li v-for="league in leagues" :key="league.id">
    <League :name="league.name" :rank="league.entry_rank" :lastRank="league.entry_last_rank" />
  </li>
</template>

<script>
import League from './League'

export default {
  props: {
    leagues: Array
  },
  components: {
    League
  }
}

</script>
