const formatNumber = num => num.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const getChartData = (xData, yData, reversed, min, max) => ({
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
      min,
      max,
      reversed,
      labels: {
        formatter: num => formatNumber(num)
      }
    }
  },
  series: xData
})

const sortLeaguesPrivate = leagues => leagues.sort(league => league.league_type !== 'x')

const getAllChips = usedChips => {
  const chipNames = ['wildcard', 'benchboost', 'freehit', 'triplecaptain']
  const chips = [...usedChips]
  chipNames.forEach(chipName => {
    chips.some(chip => chip.name !== chipName) && (
      chips.push({
        name: chipName,
        time: undefined,
        event: undefined
      })
    )
  })
  return chips
}

const formatChipName = chipName => {
  switch(chipName) {
    case 'wildcard':
      return 'Wildcard'
    case 'benchboost':
      return 'Bench Boost'
    case 'freehit':
      return 'Free-Hit'
    case 'triplecaptain':
      return 'Triple Captain'
    default:
      return chipName
  }
}

export {
  getChartData,
  sortLeaguesPrivate,
  getAllChips,
  formatChipName,
  formatNumber
}
