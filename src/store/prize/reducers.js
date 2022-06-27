const initialState = {
  fetched: false,
  prize_image: null,
  prize_image_mobile: null
}

export const PRIZE_FETCH_REQUESTED = "PRIZE_FETCH_REQUESTED";
export const PRIZE_FETCH_SUCCEEDED = "PRIZE_FETCH_SUCCEEDED";

export default (state = initialState, action) => {
  switch (action.type) {
    case PRIZE_FETCH_REQUESTED:
      return {
        ...state
      }

    case PRIZE_FETCH_SUCCEEDED:
      return {
        ...state,
        prize_image: action.payload.prize_image,
        prize_image_mobile: action.payload.prize_image_mobile,
        fetched: true
      }

    default:
      return state
  }
}