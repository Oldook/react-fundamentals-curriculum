var React = require('react');
var CityForm = require('./CityForm');
var api = require('../utils/api');

class Navbar extends React.Component {
    handleSubmit(city) {
        api.getWeather(city);
    }
    render () {
        return (
            <div className="app-navbar">
                <h1>WeatherApp Header</h1>
                <CityForm flexDirection="row" onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

module.exports = Navbar;
