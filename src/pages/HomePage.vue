<template>
  <main v-if="loading" className="loader-container">
    <MoonLoader />
  </main>
  <main v-else className="main-container main-container--home">
    <Title text="Dashboard" />
    <Card :title="'Overall Rank'" :value="this.dataManagerGeneral.summary_overall_rank" :valueDiff="this.dataManagerGeneral.summary_overall_rank - this.dataPreviousGameweek.overall_rank" />
    <Card :title="'Overall Points'" :value="this.dataManagerGeneral.summary_overall_points" :valueDiff="this.dataManagerGeneral.summary_overall_points - this.dataPreviousGameweek.total_points" />
    <Card :title="'Gameweek Rank'" :value="this.dataManagerGeneral.summary_event_rank" :valueDiff="this.dataManagerGeneral.summary_event_rank - this.dataPreviousGameweek.rank" />
    <Card :title="'Gameweek Points'" :value="this.dataManagerGeneral.summary_event_points" />
    <template v-if="clickedCard === 'Overall Rank'">
      <LineChart :chartSeries="this.dataManagerOverallRankChart.series" :chartOptions="this.dataManagerOverallRankChart.chartOptions"/>
    </template>
    <template v-else-if="clickedCard === 'Gameweek Rank'">
      <LineChart :chartSeries="this.dataManagerGameweekRankChart.series" :chartOptions="this.dataManagerGameweekRankChart.chartOptions"/>
    </template>
    <template v-else-if="clickedCard === 'Overall Points'">
      <LineChart :chartSeries="this.dataManagerOverallPointsChart.series" :chartOptions="this.dataManagerOverallPointsChart.chartOptions"/>
    </template>
    <template v-else-if="clickedCard === 'Gameweek Points'">
      <LineChart :chartSeries="this.dataManagerGameweekPointsChart.series" :chartOptions="this.dataManagerGameweekPointsChart.chartOptions"/>
    </template>
  </main>
</template>

<script>
import Card from '../components/Card'
import LineChart from '../components/LineChart'
import Title from '../components/Title'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { 
  getChartDataOverallRank, 
  getChartDataGameweekRank,
  getChartDataOverallPoints,
  getChartDataGameweekPoints,
} from '../helpers'

export default {
  name: 'HomePage',
  data() {
    return {
      loading: false,
      clickedCard: 'Overall Rank'
    }
  },
  components: {
    Title,
    Card,
    MoonLoader,
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
      await this.$store.dispatch('fetchDataManagerGeneral')
      await this.$store.dispatch('fetchDataManagerHistory')
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
    dataManagerOverallRankChart() {
      return getChartDataOverallRank(this.$store.getters.getDataManagerHistory.current)
    },
    dataManagerGameweekRankChart() {
      return getChartDataGameweekRank(this.$store.getters.getDataManagerHistory.current)
    },
    dataManagerOverallPointsChart() {
      return getChartDataOverallPoints(this.$store.getters.getDataManagerHistory.current)
    },
    dataManagerGameweekPointsChart() {
      return getChartDataGameweekPoints(this.$store.getters.getDataManagerHistory.current)
    },
    dataPreviousGameweek() {
      const numOfGameweeks = this.$store.getters.getDataManagerHistory.current.length;
      if(numOfGameweeks > 1) {
        return this.$store.getters.getDataManagerHistory.current[numOfGameweeks - 2]
      }
      return null
    },
  }
}
</script>
