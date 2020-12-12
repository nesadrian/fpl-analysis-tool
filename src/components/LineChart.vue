<template>
  <section>
    <VueApexCharts
      width="600"
      type="line"
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
