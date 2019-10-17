/*
 * Created on Wed Oct 08 2019
 *
 * Author: Quy Pham - s5k.github.io
 */

export default (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        ...action.payload,
        loading: false
      }

    case 'FETCH_ERROR':
      return {
        ...state,
        error: 'Không thể tải dữ liệu!',
        loading: false
      }
    case 'SEEMORE_CLICKING':
      return {
        ...state,
        SEEMORE_CLICKING: true
      }

    case 'WINDOW_WIDTH':
      return {
        ...state,
        ...action.payload
      }

    case 'COLLAPSE_SIDEBAR':
      return {
        ...state,
        COLLAPSE_SIDEBAR: action.payload
      }

    default:
      return state
  }
}
