import React from 'react';
import CityForm from './CityForm';

const Navbar = () => 
    <div className="app-navbar">
        <h1>WeatherApp</h1>
        <CityForm flexDirection="row" />
    </div>

export default Navbar;
