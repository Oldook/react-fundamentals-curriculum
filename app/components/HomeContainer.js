import React from 'react';
import CityForm from './CityForm';

const HomeContainer = () => 
    <div className="home-container" style={{backgroundImage: 'url(app/images/pattern.svg)'}}>
        <h1 className="header">Enter a City and State</h1>
        <CityForm flexDirection="column" />
    </div>

export default HomeContainer;
