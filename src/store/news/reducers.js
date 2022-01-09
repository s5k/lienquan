const initialState = {
  fetched_posts: false,
  fetched_post: false,
  posts: [],
  post: {},
  SEEMORE_CLICKING: false
}

export const NEWS_FETCH_REQUESTED = "NEWS_FETCH_REQUESTED";
export const NEWS_FETCH_SUCCEEDED = "NEWS_FETCH_SUCCEEDED";
export const NEWS_DETAIL_FETCH_REQUESTED = "NEWS_DETAIL_FETCH_REQUESTED";
export const NEWS_DETAIL_FETCH_SUCCEEDED = "NEWS_DETAIL_FETCH_SUCCEEDED";

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_FETCH_REQUESTED:
      return {
        ...state,
        fetched_posts: false,
        fetched_post: false,
      }

    case NEWS_FETCH_SUCCEEDED:
      return {
        ...state,
        posts: action.payload,
        fetched_posts: true,
      }

    case NEWS_DETAIL_FETCH_REQUESTED:
      return {
        ...state,
        fetched_posts: false,
        fetched_post: false,
      }

    case NEWS_DETAIL_FETCH_SUCCEEDED:
      return {
        ...state,
        post: action.payload,
        fetched_post: true,
      }
    
    default:
      return state
  }
}
