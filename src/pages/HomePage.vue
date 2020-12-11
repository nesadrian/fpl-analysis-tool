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
  </main>
</template>

<script>
//<LineChart :chartSeries="this.dataManagerHistoryChart.series" :chartOptions="this.dataManagerHistoryChart.chartOptions"/>
import Card from '../components/Card'
//import LineChart from '../components/LineChart'
import Title from '../components/Title'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      loading: false,
    }
  },
  components: {
    Title,
    Card,
    MoonLoader,
    //LineChart
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
    dataPreviousGameweek() {
      const numOfGameweeks = this.$store.getters.getDataManagerHistory.current.length;
      if(numOfGameweeks > 1) {
        console.log(numOfGameweeks, "s")
        return this.$store.getters.getDataManagerHistory.current[numOfGameweeks - 2]
      }
      return null
    },
  }
}
</script>
