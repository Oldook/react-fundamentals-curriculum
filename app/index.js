import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import createStoreWithMiddleware from './redux/createStoreWithMiddleware';
import { Provider } from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <Provider store={createStoreWithMiddleware()}>
        <App />
    </Provider>,
    document.getElementById('app')
);   

