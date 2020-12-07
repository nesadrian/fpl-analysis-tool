import { managerDataGeneralMock } from './mock'
const isDev = process.env.NODE_ENV === 'development';
const baseURL = 'https://fantasy.premierleague.com/api/'

const getManagerDataGeneral = managerId => isDev ? managerDataGeneralMock : fetch(`${baseURL}entry/${managerId}/`).then(res => res.json())

export {
  getManagerDataGeneral
}
