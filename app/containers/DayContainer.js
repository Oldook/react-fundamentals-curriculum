import { connect } from 'react-redux';
import Day from '../components/Day';
import { setCity, setDetails } from '../redux/modules/weatherApp';

const mapStateToProps = (state, ownProps) => {
    return {
        day: ownProps.day,
        getForecast: () => state.forecast,
        getCity: () => state.city
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (details) => dispatch(setDetails(details))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Day);