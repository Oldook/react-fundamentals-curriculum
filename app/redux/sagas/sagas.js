import api from '../../utils/api';
import { call, put, takeEvery, all } from 'redux-saga/effects';

export function* forecastApiRequest(action) {
    console.log('here');
    const response = yield call(api.getForecast, action.city);
    console.log(response);
    yield put({
        type: 'SET_FORECAST',
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