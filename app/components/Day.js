import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getDate from '../utils/getDate';

const Day = ({ getCity, getForecast, day, onClick }) =>
    <Link
        className = "detailLink"
        to={{pathname: `/details/${getCity()}`}}
        onClick={() => onClick({
            forecast: getForecast().list[day],
            day
        })}
    >
        <div className = "day-container">
            <img className = "weather" src = {`/app/images/weather-icons/${getForecast().list[day].weather[0].icon}.svg`} />
            <h2 className = "date">{getDate(getForecast().list[day].dt)}</h2>
        </div>
    </Link>;

Day.propTypes = {
    getForecast: PropTypes.func.isRequired,
    getCity: PropTypes.func.isRequired,
    day: PropTypes.number.isRequired
};

export default Day;