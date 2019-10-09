/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

export default (state, action) => {
  switch (action.type) {
    case 'changeName':
      return {
        ...state,
        ...action.newTheme
      }

    default:
      return state
  }
}
