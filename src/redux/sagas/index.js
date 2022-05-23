import {ROUTER_ON_LOCATION_CHANGED} from "@lagunovsky/redux-react-router";
import {takeLatest, put, call, select} from 'redux-saga/effects';
import {SET_LATEST_NEWS_ERROR, SET_LOADING_DATA, SET_POPULAR_NEWS_ERROR} from '../constants';
import {getLatestNews, getPopularNews} from '../../api/index';
import {setLatestNews, setPopularNews} from "../actions/action-creators";

export function* handleLatestNews() {
    try {
        const { hits } = yield call(getLatestNews, 'frontend');
        yield put(setLatestNews(hits));
    } catch {
        yield put({ type: SET_LATEST_NEWS_ERROR, payload: 'Error fetching latest news' });
    }
}

export function* handlePopularNews() {
    try {
        const { hits } = yield call(getPopularNews);
        yield put(setPopularNews(hits));
    } catch {
        yield put({ type: SET_POPULAR_NEWS_ERROR, payload: 'Error fetching popular news' });
    }
}

export function* watchNewsSaga() {
    yield put({type: SET_LOADING_DATA, payload: true});
    const path = yield select(({router}) => router.location.pathname);
    if(path === '/popular-news') {
        yield call(handlePopularNews)
    }
    if(path === '/latest-news') {
        yield call(handleLatestNews)
    }
    yield put({type: SET_LOADING_DATA, payload: false})
}

export default function* rootSaga() {
    yield takeLatest(ROUTER_ON_LOCATION_CHANGED, watchNewsSaga);
}