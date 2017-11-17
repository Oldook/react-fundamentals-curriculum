import React from 'react';
import { Link } from 'react-router-dom';

const CityForm = ({ flexDirection, handleChange, getCity, getState }) =>
    <div className="form-container" style={{flexDirection: flexDirection}}>
        <input
            type="text"
            id="city"
            placeholder="St. George, Utah"
            onChange={handleChange}
            className="form-control"
        />
        { console.log('city form state')}
        { console.log(getState()) }
        {
            getCity() ?
                <Link 
                    className="btn btn-success"
                    style={{margin: '10px'}}
                    to={{
                        pathname: '/forecast',
                        search: `?city=${getCity()}`
                    }}
                >
                    Get Weather
                </Link>
                :
                <button 
                    className="btn btn-success"
                    style={{margin: '10px'}}
                    disabled={true}
                >
                    Get Weather
                </button>
        }
    </div>

export default CityForm;