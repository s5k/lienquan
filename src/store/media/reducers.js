const initialState = {
  fetched: false,
  photos: [],
  videos: []
}

export const MEDIA_FETCH_REQUESTED = "MEDIA_FETCH_REQUESTED";
export const MEDIA_FETCH_SUCCEEDED = "MEDIA_FETCH_SUCCEEDED";

export default (state = initialState, action) => {
  switch (action.type) {
    case MEDIA_FETCH_REQUESTED:
      return {
        ...state
      }

    case MEDIA_FETCH_SUCCEEDED:
      return {
        ...state,
        videos: action.payload.filter(media => media.is_video === 1),
        photos: action.payload.filter(media => media.is_video === 0).map(media => {
          return {
            ...media,
            images: media.images.map(img => `${process.env.REACT_APP_API_SERVER}/${img}`)
          }
        }),
        fetched: true
      }

    default:
      return state
  }
}