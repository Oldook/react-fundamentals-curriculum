import React from 'react';
import CityFormContainer from '../containers/CityFormContainer';

const HomeContainer = () => 
    <div className="home-container" style={{backgroundImage: 'url(app/images/pattern.svg)'}}>
        <h1 className="header">Enter a City and State</h1>
        <CityFormContainer flexDirection="column" />
    </div>;

export default HomeContainer;
