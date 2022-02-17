const initialState = {
  fetched: false,
  events: []
}

export const EVENTS_FETCH_REQUESTED = "EVENTS_FETCH_REQUESTED";
export const EVENTS_FETCH_SUCCEEDED = "EVENTS_FETCH_SUCCEEDED";

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_FETCH_REQUESTED:
      return {
        ...state
      }

    case EVENTS_FETCH_SUCCEEDED:
      return {
        ...state,
        events: action.payload,
        fetched: true
      }

    default:
      return state
  }
}