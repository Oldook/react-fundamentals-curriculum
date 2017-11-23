import { connect } from 'react-redux';
import Forecast from '../components/Forecast';
import { setForecast, setLoading } from '../redux/modules/weatherApp';

const mapStateToProps = (state) => {
    return {
        getForecast: () => state.forecast,
        getCity: () => state.city,
        ifLoading: () => state.loading,
        getState: () => state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestForecast: (city) => dispatch({ type: 'FORECAST_API_REQUEST', city}),
        setLoading: () => dispatch(setLoading())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forecast);