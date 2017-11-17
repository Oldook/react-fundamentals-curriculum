import api from '../../utils/api';
import { call, put, takeEvery, all } from 'redux-saga/effects';

export function* forecastApiRequest(action) {
    const response = yield call(api.getForecast, action.city);
    yield put({
        type: 'SET_FORECAST',
        city: action.city,
        forecast: response
    });
}

export function* watchIncrementAsync() {
    yield takeEvery('FORECAST_API_REQUEST', forecastApiRequest);
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync()
    ]);
}