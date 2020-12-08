<template>
  <main>
    <Card />
    <LineChart :chartSeries="chartDataManagerHistory.series" :chartOptions="chartDataManagerHistory.chartOptions"/>
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
      loading: false,
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
      this.loading = true
      const data = await getDataManagerHistory(this.managerId)
      this.dataManagerHistory = data
      this.chartDataManagerHistory = getChartDataFromHistory(this.dataManagerHistory.current)
      this.loading = false
    }
  }
}
</script>
