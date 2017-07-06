var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class CityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(
            this.state.city
        )
    }
    handleChange(event) {
        var value = event.target.value;

        this.setState(function () {
            return {
                city: value
            }
        });
    }
    render () {
        return (
        <form className="form-container" style={{"flexDirection": this.props.flexDirection}} onSubmit={this.handleSubmit}>
            <input type="text"
                   id="city"
                   placeholder="St. George, Utah"
                   type="text"
                   value={this.state.city}
                   autoComplete="off"
                   onChange={this.handleChange}
                   className="form-control"
            />
            <Link   className="btn btn-success"
                    style={{"margin": "10px"}}
                    disabled={!this.state.city}
                    to="/forecast">
                Get Weather
            </Link>
        </form>
        )
    }
}

CityForm.propTypes = {
    flexDirection: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

module.exports = CityForm;
