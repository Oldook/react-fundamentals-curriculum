import { connect } from 'react-redux';
import Details from '../components/Details';

const mapStateToProps = (state) => {
    return {
        getForecast: () => state.details.forecast,
        getDay: () => state.details.day,
        getCity: () => state.city
    };
};

export default connect(
    mapStateToProps
)(Details);