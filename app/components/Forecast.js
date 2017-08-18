var React = require('react');
var Loading = require('./Loading');
var queryString = require('query-string');
var api = require('../utils/api');

class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: [],
            loading: true
        }
    } 

    componentDidMount() {
        this.setState(function () {
            return {
                loading: true
            }
        })
        api.getForecast(queryString.parse(this.props.location.search).city).then(function (response) {
            this.setState(function () {
                console.log(response);
                return {
                    loading: false,
                    forecast: response
                }
            })
        }.bind(this));
    }

    render () {
        return this.state.loading ?
            <Loading />
            :
            <p>city</p>
            
    }
}

module.exports = Forecast;
