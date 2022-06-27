const { apiCall } = require("Axios");
const { put, call, takeLatest } = require("redux-saga/effects");
const { FETCH_ERROR, FETCH_STARTED, FETCH_SUCCEESED } = require("store/app/reducers");
const { PRIZE_FETCH_SUCCEEDED, PRIZE_FETCH_REQUESTED } = require("./reducers");

function* fetchEvents() {
    try {
        yield put({type: FETCH_STARTED})
        const { data: res } = yield call(apiCall, "GET", "/prize")
        yield put({type: PRIZE_FETCH_SUCCEEDED, payload: res})
        yield put({type: FETCH_SUCCEESED})
    } catch(e) {
        yield put({type: FETCH_ERROR})
    }
}

function* saga() {
    yield takeLatest(PRIZE_FETCH_REQUESTED, fetchEvents)
}

export default saga;