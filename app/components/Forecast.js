var React = require('react');
var Loading = require('./Loading');
var Day = require('./Day');
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
        var city = queryString.parse(this.props.location.search).city;

        this.setState(function () {
            return {
                loading: true
            }
        })
        
        api.getForecast(city).then(function (response) {
            console.log(response);

            this.setState(function () {
                return {
                    city: city,
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
            <div>
                <h1 className="forecast-header">{this.state.city}</h1>
                <div className="forecast-container">
                    {this.state.forecast.list.map(function (item, i) {
                        return <Day key = {i} forecast = {item} />
                    })}
                </div>
            </div>       
    }
}

module.exports = Forecast;
