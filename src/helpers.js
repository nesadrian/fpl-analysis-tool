export const getChartData = (xData, yData, reversed, name) => ({
  chartOptions: {
    chart: {
      toolbar: {
        show: false
      },
    },
    xaxis: {
      title: {
        text: 'Gameweek'
      },
      categories: yData
    },
    yaxis: {
      reversed,
      labels: {
        formatter: function(val) {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
      }
    }
  },
  series: [
    {
      name,
      data: xData
    },
  ]
})
