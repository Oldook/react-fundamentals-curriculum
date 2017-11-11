import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import weatherApp from './modules/weatherApp';
import rootSaga from './sagas/sagas';

export default function createStoreWithMiddleware() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        weatherApp,
        applyMiddleware(sagaMiddleware)
    );
    
    sagaMiddleware.run(rootSaga);
    
    return store;
}