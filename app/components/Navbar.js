import React from 'react';
import CityForm from './CityForm';

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

export default Navbar;
