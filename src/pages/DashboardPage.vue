<template>
  <main v-if="loading" className="loader-container">
    <MoonLoader />
  </main>
  <main v-else className="main-container">
    <PageTitle text="Dashboard" />
    <section class="main__content-container--dashboard">
      <Card v-on:click="this.clickedCard='Overall Rank'" :title="'Overall Rank'" :value="this.dataManagerGeneral.summary_overall_rank" :valueDiff="this.dataManagerGeneral.summary_overall_rank - this.dataPreviousGameweek.overall_rank" />
      <Card v-on:click="this.clickedCard='Overall Points'" :title="'Overall Points'" :value="this.dataManagerGeneral.summary_overall_points" :valueDiff="this.dataManagerGeneral.summary_overall_points - this.dataPreviousGameweek.total_points" />
      <Card v-on:click="this.clickedCard='Gameweek Rank'" :title="'Gameweek Rank'" :value="this.dataManagerGeneral.summary_event_rank" :valueDiff="this.dataManagerGeneral.summary_event_rank - this.dataPreviousGameweek.rank" />
      <Card v-on:click="this.clickedCard='Gameweek Points'" :title="'Gameweek Points'" :value="this.dataManagerGeneral.summary_event_points" />
      <template v-if="clickedCard === 'Overall Rank'">
        <LineChart :chartSeries="this.dataOverallRankChart.series" :chartOptions="this.dataOverallRankChart.chartOptions"/>
      </template>
      <template v-else-if="clickedCard === 'Gameweek Rank'">
        <LineChart :chartSeries="this.dataGameweekRankChart.series" :chartOptions="this.dataGameweekRankChart.chartOptions"/>
      </template>
      <template v-else-if="clickedCard === 'Overall Points'">
        <LineChart :chartSeries="this.dataOverallPointsChart.series" :chartOptions="this.dataOverallPointsChart.chartOptions"/>
      </template>
      <template v-else-if="clickedCard === 'Gameweek Points'">
        <LineChart :chartSeries="this.dataGameweekPointsChart.series" :chartOptions="this.dataGameweekPointsChart.chartOptions"/>
      </template>
      <LeaguesList :leagues="this.dataClassicLeagues"/>
      <ChipsList :chips="this.dataChips" />
    </section>
  </main>
</template>

<script>
import Card from '../components/Card'
import LineChart from '../components/LineChart'
import PageTitle from '../components/PageTitle'
import LeaguesList from '../components/LeaguesList'
import ChipsList from '../components/ChipsList'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { getChartData, sortLeaguesPrivate, getAllChips } from '../helpers'

export default {
  name: 'DashboardPage',
  data() {
    return {
      loading: false,
      clickedCard: 'Overall Rank'
    }
  },
  components: {
    PageTitle,
    Card,
    MoonLoader,
    LeaguesList,
    ChipsList,
    LineChart
  },
  props: {
    managerId: String,
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      await this.$store.dispatch('fetchDataGeneral')
      await this.$store.dispatch('fetchDataManagerGeneral')
      await this.$store.dispatch('fetchDataManagerHistory')
      await this.$store.dispatch('fetchDataFixtures')
      this.loading = false
    }
  },
  computed: {
    dataManagerGeneral() {
      return this.$store.getters.getDataManagerGeneral;
    },
    dataManagerHistory() {
      return this.$store.getters.getDataManagerHistory;
    },
    dataOverallRankChart() {
      const xData = [
        {
          name: 'Overall Rank',
          data: this.$store.getters.getDataManagerHistory.current.map(gameweek => gameweek.overall_rank)
        }
      ]
      const yData = this.$store.getters.getDataManagerHistory.current.map(gameweek => gameweek.event)
      const totalPlayers = this.$store.getters.getDataGeneral.total_players
      return getChartData(xData, yData, true, 1, totalPlayers)
    },
    dataGameweekRankChart() {
      const xData = [
        {
          name: 'Gameweek Rank',
          data: this.$store.getters.getDataManagerHistory.current.map(gameweek => gameweek.rank)
        }
      ]
      const yData = this.$store.getters.getDataManagerHistory.current.map(gameweek => gameweek.event)
        const totalPlayers = this.$store.getters.getDataGeneral.total_players
      return getChartData(xData, yData, true, 1, totalPlayers)
    },
    dataOverallPointsChart() {
      const xData = [
        {
          name: 'Overall Points',
          data: this.$store.getters.getDataManagerHistory.current.map(gameweek => gameweek.total_points)
        }
      ]
      const yData = this.$store.getters.getDataManagerHistory.current.map(gameweek => gameweek.event)
      return getChartData(xData, yData, false)
    },
    dataGameweekPointsChart() {
      const xData = [
        {
          name: 'Gameweek Points',
          data: this.$store.getters.getDataManagerHistory.current.map(gameweek => gameweek.points)
        },
        {
          name: 'Average Gameweek Points',
          data: this.$store.getters.getDataFixtures.events
            .filter(gameweek => gameweek.finished)
            .map(gameweek => gameweek.average_entry_score)
        },
        {
          name: 'Highest Gameweek Points',
          data: this.$store.getters.getDataFixtures.events
            .filter(gameweek => gameweek.finished)
            .map(gameweek => gameweek.highest_score)
        }
      ]
      const yData = this.$store.getters.getDataManagerHistory.current.map(gameweek => gameweek.event)
      return getChartData(xData, yData, false)
    },
    dataPreviousGameweek() {
      const numOfGameweeks = this.$store.getters.getDataManagerHistory.current.length;
      if(numOfGameweeks > 1) {
        return this.$store.getters.getDataManagerHistory.current[numOfGameweeks - 2]
      }
      return null
    },
    dataClassicLeagues() {
      const leagues = this.$store.getters.getDataManagerGeneral.leagues.classic;

      if(leagues.length > 0) {
        return sortLeaguesPrivate(leagues)
      }
      return null
    },
    dataChips() {
      const usedChips = this.$store.getters.getDataManagerHistory.chips
      return getAllChips(usedChips)
    }
  }
}
</script>
