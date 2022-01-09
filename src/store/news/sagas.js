import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_ERROR, FETCH_SUCCEESED, FETCH_STARTED } from "../app/reducers";
import { NEWS_FETCH_REQUESTED, NEWS_FETCH_SUCCEEDED, NEWS_DETAIL_FETCH_REQUESTED, NEWS_DETAIL_FETCH_SUCCEEDED } from "./reducers";
import { apiCall } from '../../Axios'

function* fetchNews() {
    try {
        yield put({type: FETCH_STARTED})
        const { data: res } = yield call(apiCall, "GET", "/news")
        yield put({type: NEWS_FETCH_SUCCEEDED, payload: res})
        yield put({type: FETCH_SUCCEESED})
    } catch(e) {
        yield put({type: FETCH_ERROR})
    }
}

function* fetchNewsDetail(action) {
    try {
        yield put({type: FETCH_STARTED})
        const { data: res } = yield call(apiCall, "GET", "/news/" + action.newsId)
        yield put({type: NEWS_DETAIL_FETCH_SUCCEEDED, payload: res})
        yield put({type: FETCH_SUCCEESED})
    } catch(e) {
        yield put({type: FETCH_ERROR})
    }
}

function* saga() {
    yield takeLatest(NEWS_FETCH_REQUESTED, fetchNews)
    yield takeLatest(NEWS_DETAIL_FETCH_REQUESTED, fetchNewsDetail)
}

export default saga;