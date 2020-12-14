const getChartData = (xData, yData, reversed, name) => ({
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

const sortLeaguesPrivate = leagues => leagues.sort(league => league.league_type !== 'x')

const getAllChips = usedChips => {
  const chipNames = ['wildcard', 'benchboost', 'freehit', 'triplecaptain']
  const chips = usedChips
  chipNames.forEach(chipName => {
    usedChips.some(chip => chip.name !== chipName) && (
      chips.push({
        name: chipName,
        time: undefined,
        event: undefined
      })
    )
  })
  return chips
}

export {
  getChartData,
  sortLeaguesPrivate,
  getAllChips
}
