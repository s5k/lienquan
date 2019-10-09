/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

import menuReducer from './menu'

export default ({ menu }, action) => ({
  menu: menuReducer(menu, action)
})
