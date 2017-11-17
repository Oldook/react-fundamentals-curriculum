import { connect } from 'react-redux';
import Forecast from '../components/Forecast';
import { setForecast, setLoading } from '../redux/modules/weatherApp';

const mapStateToProps = (state) => {
    return {
        getForecast: () => state.forecast,
        getCity: () => state.city,
        getState: () => state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestForecast: (city) => dispatch({ type: 'FORECAST_API_REQUEST', city}),
        setCity: (city) => dispatch(setCity(city)),
        setLoading: () => dispatch(setLoading())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Forecast);