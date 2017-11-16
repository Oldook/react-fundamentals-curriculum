import { connect } from 'react-redux';
import Forecast from '../components/Forecast';
import { setForecast } from '../redux/modules/weatherApp';

const mapStateToProps = (state) => {
    return {
        getForecast: () => state.forecast,
        getCity: () => state.city,
        ifLoading: () => state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestForecast: (city) => dispatch({ type: 'FORECAST_API_REQUEST', city}),
        setLoading: () => {
            dispatch({ type: 'SET_LOADING' })
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forecast);