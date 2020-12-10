<template>
  <main className="main-container main-container--home">
    <Title text="Dashboard" />
    <Card :title="'Overall Rank'" :value="dataManagerGeneral.summary_overall_rank" />
    <Card :title="'Gameweek Rank'" :value="dataManagerGeneral.summary_event_rank" />
    <Card :title="'Overall Points'" :value="dataManagerGeneral.summary_overall_points" />
    <Card :title="'Gameweek Points'" :value="dataManagerGeneral.summary_event_points" />
    <LineChart :chartSeries="chartDataManagerHistory.series" :chartOptions="chartDataManagerHistory.chartOptions"/>
  </main>
</template>

<script>
import Card from '../components/Card'
import LineChart from '../components/LineChart'
import Title from '../components/Title'
import { getChartDataFromHistory } from '../helpers'
import { getDataManagerHistory } from '../api'

export default {
  name: 'HomePage',
  data() {
    return {
      loadingChart: false,
      dataManagerHistory: undefined,
      chartDataManagerHistory: undefined
    }
  },
  components: {
    Title,
    Card,
    LineChart
  },
  props: {
    managerId: String,
    dataManagerGeneral: Object
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loadingChart = true
      const data = await getDataManagerHistory(this.managerId)
      this.dataManagerHistory = data
      this.chartDataManagerHistory = getChartDataFromHistory(this.dataManagerHistory.current)
      this.loadingChart = false
    }
  }
}
</script>
