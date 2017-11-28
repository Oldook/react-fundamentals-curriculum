import React from 'react';
import Loading  from './Loading';
import Day from './Day';
import queryString from 'query-string';
import PropTypes from 'prop-types';

class Forecast extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const city = queryString.parse(this.props.location.search).city;

        this.props.requestForecast(city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            const city = queryString.parse(nextProps.location.search).city;

            this.props.requestForecast(city);
        }
    }

    render () {
        return this.props.ifLoading() ?
            <Loading />
            :
            <div>
                <h1 className="forecast-header">{this.props.getCity()}</h1>
                <div className="forecast-container">
                    {
                        this.props.getForecast().list.map((item, i) =>
                            <Day key = {i} forecast = {item} city = {this.props.getCity()}/>
                        )
                    }
                </div>
            </div>
    }
}

Forecast.propTypes = {
    getForecast: PropTypes.func.isRequired,
    getCity: PropTypes.func.isRequired
};


export default Forecast;
