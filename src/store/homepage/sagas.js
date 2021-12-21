import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_ERROR, FETCH_SUCCEESED, FETCH_STARTED } from "../app/reducers";
import { HOMEPAGE_FETCH_REQUESTED, HOMEPAGE_FETCH_SUCCEEDED } from "./reducers";
import { apiCall } from '../../Axios'

function* fetchHomepage() {
    try {
        yield put({type: FETCH_STARTED})
        const { data: res  } = yield call(apiCall, "GET", "/homepage")
        yield put({type: HOMEPAGE_FETCH_SUCCEEDED, payload: res})
        yield put({type: FETCH_SUCCEESED})
    } catch(e) {
        yield put({type: FETCH_ERROR})
    }
}

function* saga() {
    yield takeLatest(HOMEPAGE_FETCH_REQUESTED, fetchHomepage)
}

export default saga;