import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CityForm = (props) =>  
    <div className="form-container" style={{flexDirection: props.flexDirection}}>
        <input type="text"
            id="city"
            placeholder="St. George, Utah"
            type="text"
            onChange={props.handleChange}
            className="form-control"
        />
        {
            props.getCity() ? 
                <Link 
                    className="btn btn-success"
                    style={{margin: '10px'}}
                    to={{
                        pathname: '/forecast',
                        search: `?city=${props.getCity()}`
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