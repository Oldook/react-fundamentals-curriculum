import api from '../../utils/api';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { setLoadingOn, setLoadingOff, setForecast } from '../modules/weatherApp';

export function* forecastApiRequest(action) {
    yield put (setLoadingOn());

    const forecast = yield call(api.getForecast, action.city);
    yield put(setForecast(forecast));

    yield put (setLoadingOff());
}

export function* watchIncrementAsync() {
    yield takeEvery('FORECAST_API_REQUEST', forecastApiRequest);
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync()
    ]);
}