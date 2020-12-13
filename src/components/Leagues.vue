<template>
  <section className="leagues-container main__card">
    <section className="league-container">
      <h1>Name</h1>
      <h1>Rank</h1>
      <h1>Last Rank</h1>
    </section>
    <li v-for="league in leagues" :key="league.id">
      <League :name="league.name" :rank="league.entry_rank" :lastRank="league.entry_last_rank" />
    </li>
  </section>
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
