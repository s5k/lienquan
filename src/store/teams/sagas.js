const { apiCall } = require("Axios");
const { put, call, takeLatest } = require("redux-saga/effects");
const { FETCH_ERROR, FETCH_STARTED, FETCH_SUCCEESED } = require("store/app/reducers");
const { TEAMS_FETCH_SUCCEEDED, TEAMS_FETCH_REQUESTED } = require("./reducers");


function* fetchTeams() {
    try {
        yield put({type: FETCH_STARTED})
        const { data: res } = yield call(apiCall, "GET", "/teams")
        yield put({type: TEAMS_FETCH_SUCCEEDED, payload: res})
        yield put({type: FETCH_SUCCEESED})
    } catch (e) {
        yield put({type: FETCH_ERROR})
    }
}

function* sagas() {
    yield takeLatest(TEAMS_FETCH_REQUESTED, fetchTeams)
}

export default sagas;