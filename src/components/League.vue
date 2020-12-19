<template>
    <section className="leagues-container main__card">
      <section className="league-container">
        <h1 className="leagues__title">Name</h1>
        <h1 className="leagues__title">Rank</h1>
        <h1 className="leagues__title">Previous Rank</h1>
        <h1 className="leagues__title">Rank Difference</h1>
        <h1 className="leagues__title">Points</h1>
      </section>
      <li v-for="member in league.standings.results" :key="member.id">
        <p>{{ member }}</p>
      </li>
  </section>
</template>

<script>
export default {
  props: {
    league: Object
  }
}
</script>
