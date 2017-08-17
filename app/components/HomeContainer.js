var React = require('react');
var CityForm = require('./CityForm');
var api = require('../utils/api');

class HomeContainer extends React.Component {
    handleSubmit(city) {
        api.getWeather(city).then(
            function (response) {
                console.log(response);
            }
        )
        api.getForecast(city).then(
            function (response) {
                console.log(response);
            }
        )
    }
    render () {
        return (
            <div className="home-container" style={{backgroundImage: 'url(app/images/pattern.svg)'}}>
                <h1 className="header">Enter a City and State</h1>
                <CityForm flexDirection="column" onSubmit={ this.handleSubmit } />
            </div>
        )
    }
}

module.exports = HomeContainer;
