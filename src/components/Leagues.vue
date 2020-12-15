<template>
  <section className="leagues-container main__card">
    <section className="league-container">
      <h1 className="leagues__title">Name</h1>
      <h1 className="leagues__title">Rank</h1>
      <h1 className="leagues__title">Previous Rank</h1>
      <h1 className="leagues__title">Rank Difference</h1>
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
