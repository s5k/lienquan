const initialState = {
  fetched: false,
  logo_src: '',
  introduce_text: '',
  watch_now_url: ''
}

export const HOMEPAGE_FETCH_REQUESTED = "HOMEPAGE_FETCH_REQUESTED";
export const HOMEPAGE_FETCH_SUCCEEDED = "HOMEPAGE_FETCH_SUCCEEDED";

export default (state = initialState, action) => {
  switch (action.type) {
    case HOMEPAGE_FETCH_REQUESTED:
      return {
        ...state,
      }

      case HOMEPAGE_FETCH_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        fetched: true,
      }
    
    default:
      return state
  }
}
