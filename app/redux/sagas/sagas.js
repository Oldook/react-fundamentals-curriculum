import api from '../../utils/api';
import { call, put } from 'redux-saga/effects';

export default function* rootSaga() {
    const response = yield call(api.getForecast, 'Novosibirsk');
    console.log(response);
    console.log('Hello Sagas!');
}