const baseURL = 'https://fantasy.premierleague.com/api/'

const getManagerGeneral = (managerId) => fetch(`${baseURL}entry/${managerId}/`).then(res => res.json())

module.exports = {
  getManagerGeneral
}
