import React from 'react';
import DayContainer from '../containers/DayContainer';
import convertTemp from '../utils/convertTemp';

const Details = ({ getCity, getForecast, getDay }) =>
    <div>
        <DayContainer day = {getDay()} />
        <div className = "details-container">
            <p>{getCity()}</p>
            <p>{getForecast().weather[0].description}</p>
            <p>min temp: {convertTemp(getForecast().temp.min)} degrees</p>
            <p>max temp: {convertTemp(getForecast().temp.max)} degrees</p>
            <p>humidity: {getForecast().humidity}</p>
        </div>
    </div>;

export default Details;
