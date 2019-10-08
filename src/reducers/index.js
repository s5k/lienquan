import menuReducer from './menu'

export default ({ menu }, action) => ({
  menu: menuReducer(menu, action)
})
