import React from 'react';
import Day from './Day';

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: this.props.match.params.city,
            forecast: this.props.location.state.forecast
        }
    }

    convertTemp(temp) {
        return parseInt(temp - 273.15);
    }

    render () {
        return (
            <div>
                <Day city = {this.state.city} forecast = {this.state.forecast}/>
                <div className = "details-container">
                    <p>{this.state.city}</p>
                    <p>{this.state.forecast.weather[0].description}</p>
                    <p>min temp: {this.convertTemp(this.state.forecast.temp.min)} degrees</p>
                    <p>max temp: {this.convertTemp(this.state.forecast.temp.max)} degrees</p>
                    <p>humidity: {this.state.forecast.humidity}</p>
                </div>
            </div>
        )
    }
}

export default Details;
