var React = require('react');
var CityForm = require('./CityForm');

class Navbar extends React.Component {
    handleSubmit(city) {
        console.log('submit city: ' + city);
    }
    render () {
        return (
            <div className="app-navbar">
                <h1>WeatherApp Header</h1>
                <CityForm flexDirection="row" onSubmit={ this.handleSubmit }/>
            </div>
        );
    }
}

module.exports = Navbar;
