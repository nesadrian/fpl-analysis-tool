import { dataMockManagerGeneral, dataMockManagerHistory } from './mock'
const isDev = process.env.NODE_ENV === 'development';
const baseURL = 'https://fantasy.premierleague.com/api/'

const getDataManagerGeneral = managerId => isDev ? dataMockManagerGeneral : fetch(`${baseURL}entry/${managerId}/`).then(res => res.json())

const getDataManagerHistory = managerId => isDev ? dataMockManagerHistory : fetch(`${baseURL}entry/${managerId}/history/`).then(res => res.json())

export {
  getDataManagerGeneral,
  getDataManagerHistory
}
