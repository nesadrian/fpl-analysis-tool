const getChartDataFromHistory = (history) => {
  const chartData = {
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
        reversed: true
      }
    },
    series: [
      {
        name: "Overall Rank",
        data: []
      }
    ]
  }
  history.forEach(gameweek => {
    chartData.chartOptions.xaxis.categories.push(gameweek.event)
    chartData.series[0].data.push(gameweek.overall_rank)
  })
  return chartData
}

export {
  getChartDataFromHistory  
}
