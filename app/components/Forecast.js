import React from 'react';
import Loading  from './Loading';
import Day from './Day';
import queryString from 'query-string';
import api from '../utils/api';

class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: [],
            loading: true
        }

        this.apiRequest = this.apiRequest.bind(this);
    } 

    apiRequest(city) {
        this.setState(function () {
            return {
                loading: true
            }
        })
        
        api.getForecast(city).then(function (response) {
            this.setState(function () {
                return {
                    city: city,
                    loading: false,
                    forecast: response
                }
            })
        }.bind(this));
    }

    componentDidMount() {
        var city = queryString.parse(this.props.location.search).city;

        this.apiRequest(city);
    }

    componentWillReceiveProps(nextProps) {
        var city = queryString.parse(nextProps.location.search).city;

        this.apiRequest(city);
    }

    render () {
        return this.state.loading ?
            <Loading />
            : 
            <div>
                <h1 className="forecast-header">{this.state.city}</h1>
                <div className="forecast-container">
                    {this.state.forecast.list.map(function (item, i) {
                        return <Day key = {i} forecast = {item} city = {this.state.city}/>
                    }.bind(this))}
                </div>
            </div>       
    }
}

export default Forecast;
