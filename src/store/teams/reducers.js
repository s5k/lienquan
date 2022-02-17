const initialState = {
    fetched: false,
    teams: []
}

export const TEAMS_FETCH_REQUESTED = "TEAMS_FETCH_REQUESTED";
export const TEAMS_FETCH_SUCCEEDED = "TEAMS_FETCH_SUCCEEDED";

export default (state = initialState, action) => {
    switch (action.type) {
        case TEAMS_FETCH_REQUESTED:
            return {
                ...state
            }
        
        case TEAMS_FETCH_SUCCEEDED:
            return {
                ...state,
                teams: action.payload,
                fetched: true
            }

        default:
            return state;
    }
}