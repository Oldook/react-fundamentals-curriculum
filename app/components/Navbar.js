var React = require('react');
var CityForm = require('./CityForm');

class Navbar extends React.Component {
    render () {
        return (
            <div className="app-navbar">
                <h1>WeatherApp</h1>
                <CityForm flexDirection="row" />
            </div>
        );
    }
}

module.exports = Navbar;
