

const getChartData = (xData, yData, reversed, name) => {
  const chartData = {
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
        categories: []
      },
      yaxis: {
        labels: {
          formatter: function(val) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
        }
      }
    },
    series: [
      {
        name: "",
        data: []
      },
    ]
  }
  chartData.series[0].data = xData
  chartData.chartOptions.xaxis.categories = yData
  chartData.chartOptions.yaxis.reversed = reversed
  chartData.series[0].name = name
  return chartData
}

export {
  getChartData
}
