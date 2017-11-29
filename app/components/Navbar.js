import React from 'react';
import CityFormContainer from '../containers/CityFormContainer';

const Navbar = () => 
    <div className="app-navbar">
        <h1>WeatherApp</h1>
        <CityFormContainer flexDirection="row" />
    </div>;

export default Navbar;
