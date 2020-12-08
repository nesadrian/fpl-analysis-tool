<template>
  <main>
    <Card />
    <section>
      <LineChart :chartSeries="chartDataManagerHistory.series" :chartOptions="chartDataManagerHistory.chartOptions"/>
    </section>
  </main>
</template>

<script>
import Card from '../components/Card'
import LineChart from '../components/LineChart'
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
