var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
require('../node_modules/bootstrap/dist/js/bootstrap.min.js');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./index.css');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
