<template>
    <section className="leagues-container main__card">
      <section className="league-container">
        <h1 className="leagues__title">Name</h1>
        <h1 className="leagues__title">Rank</h1>
        <h1 className="leagues__title">Previous Rank</h1>
        <h1 className="leagues__title">Rank Difference</h1>
        <h1 className="leagues__title">Points</h1>
        <h1 className="leagues__title">Total Points</h1>
      </section>
      <li v-for="member in league.standings.results" :key="member.id">
        <LeagueMember 
          :teamName="member.entry_name" 
          :managerName="member.player_name"
          :rank="member.rank"
          :lastRank="member.last_rank"
          :points="member.event_total"
          :totalPoints="member.total"
        />
      </li>
  </section>
</template>

<script>
import LeagueMember from './LeagueMember'

export default {
  props: {
    league: Object
  },
  components: {
    LeagueMember
  }
}
</script>
