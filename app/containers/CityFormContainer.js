import { connect } from 'react-redux';
import CityForm from '../components/CityForm';
import { setCity } from '../redux/modules/weatherApp';

const mapStateToProps = (state, ownProps) => {
    return {
        flexDirection: ownProps.flexDirection
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (city) => dispatch(setCity(city))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityForm);