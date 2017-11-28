import { connect } from 'react-redux';
import Forecast from '../components/Forecast';
import { setForecastApiRequest } from '../redux/modules/weatherApp';

const mapStateToProps = (state) => {
    return {
        getForecast: () => state.forecast,
        getCity: () => state.city,
        ifLoading: () => state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestForecast: (city) => dispatch(setForecastApiRequest(city))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forecast);