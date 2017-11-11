import { connect } from 'react-redux';
import CityForm from '../components/CityForm';
import { setCity } from '../redux/modules/weatherApp';

const mapStateToProps = (state, ownProps) => {
    return {
        flexDirection: ownProps.flexDirection,
        getCity: () => state.city
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (event) => dispatch(setCity(event.target.value))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityForm);