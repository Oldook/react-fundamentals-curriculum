import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        const value = event.target.value;

        this.setState(() => ({
            city: value
        }));
    }
    render () {
        return (
            <div className="form-container" style={{flexDirection: this.props.flexDirection}}>
                <input type="text"
                    id="city"
                    placeholder="St. George, Utah"
                    type="text"
                    value={this.state.city}
                    onChange={this.handleChange}
                    className="form-control"
                />
                {
                    this.state.city ? 
                        <Link 
                            className="btn btn-success"
                            style={{margin: '10px'}}
                            to={{
                                pathname: '/forecast',
                                search: `?city=${this.state.city}`
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
        );
    }
}

CityForm.propTypes = {
    flexDirection: PropTypes.string.isRequired
};

export default CityForm;