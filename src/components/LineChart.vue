<template>
  <section className="chart-container main__card">
    <VueApexCharts
      type="line"
      height= "100%"
      width= "100%"
      :options="chartOptions"
      :series="chartSeries"
    />
  </section>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'LineChart',
  props: {
    chartSeries: Array,
    chartOptions: Object
  },
  components: {
    VueApexCharts
  }
}
</script>
