<template>
  <section className="leagues-container main__card">
    <section className="league-container">
      <h1 className="leagues__title">Name</h1>
      <h1 className="leagues__title">Rank</h1>
      <h1 className="leagues__title">Previous Rank</h1>
      <h1 className="leagues__title">Rank Difference</h1>
    </section>
    <li v-for="league in leagues" :key="league.id">
      <router-link :to="'/leagues/' + league.id">
        <LeaguesListItem :name="league.name" :rank="league.entry_rank" :lastRank="league.entry_last_rank" />
      </router-link>
    </li>
  </section>
</template>

<script>
import LeaguesListItem from './LeaguesListItem'

export default {
  props: {
    leagues: Array
  },
  components: {
    LeaguesListItem
  }
}

</script>
