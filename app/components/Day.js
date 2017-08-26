var React = require('react');
var PropTypes = require('prop-types');

class Day extends React.Component {
    constructor(props) {
        super(props);
        
        this.days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        this.months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec"
        ];

        this.getDate = this.getDate.bind(this);
    }

    getDate(timestamp) {
        var date = new Date(timestamp * 1000);

        return this.days[date.getDay()] + ', ' + this.months[date.getMonth()] + ' ' + date.getDate();
    }

    render() {
        return (
            <div className = "day-container">
                <img className = "weather" src = {"/app/images/weather-icons/" + this.props.forecast.weather[0].icon + ".svg"} />
                <h2 className = "date">{this.getDate(this.props.forecast.dt)}</h2>
            </div>
        )
    }
}

Day.propTypes = {
    forecast: PropTypes.object.isRequired
}

module.exports = Day;