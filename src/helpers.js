const chartDataTemplate = {
  chartOptions: {
    chart: {
      toolbar: {
        show: false
      },
    },
    xaxis: {
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


const getChartDataOverallRank = (history) => {
  let chartData = chartDataTemplate
  chartData.chartOptions.yaxis.reversed = false
  history.forEach(gameweek => {
    chartData.chartOptions.xaxis.categories.push(gameweek.event)
    chartData.series[0].data.push(gameweek.overall_rank)
  })
  return chartData
}

const getChartDataGameweekRank = (history) => {
  let chartData = chartDataTemplate
  chartData.chartOptions.yaxis.reversed = false
  history.forEach(gameweek => {
    chartData.chartOptions.xaxis.categories.push(gameweek.event)
    chartData.series[0].data.push(gameweek.rank)
  })
  return chartData
}

const getChartDataOverallPoints = (history) => {
  let chartData = chartDataTemplate
  chartData.chartOptions.yaxis.reversed = false
  history.forEach(gameweek => {
    chartData.chartOptions.xaxis.categories.push(gameweek.event)
    chartData.series[0].data.push(gameweek.total_points)
  })
  return chartData
}

const getChartDataGameweekPoints = (history) => {
  let chartData = chartDataTemplate
  chartData.chartOptions.yaxis.reversed = false
  history.forEach(gameweek => {
    chartData.chartOptions.xaxis.categories.push(gameweek.event)
    chartData.series[0].data.push(gameweek.points)
  })
  return chartData
}

export {
  getChartDataOverallRank,
  getChartDataGameweekRank,
  getChartDataOverallPoints,
  getChartDataGameweekPoints
}
