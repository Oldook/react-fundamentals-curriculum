const SET_CITY = 'SET_CITY';
const SET_FORECAST = 'SET_FORECAST';
const SET_LOADING = 'SET_LOADING';
const FORECAST_API_REQUEST = 'FORECAST_API_REQUEST';

export function setCity(city) {
    return {
        type: SET_CITY,
        city
    }
}

export function setForecast(forecast) {
    return {
        type: SET_FORECAST,
        forecast
    }
}

export default function reducer(state = { city: '', loading: false, forecast: {} }, action) {
    switch (action.type) {
        case SET_CITY:
            return Object.assign(
                {},
                state,
                { city: action.city }
            )
        case SET_LOADING:
            return Object.assign(
                {},
                state,
                { loading: true }
            )
        case SET_FORECAST:
            console.log(action);
            return Object.assign(
                {},
                state,
                {
                    loading: false,
                    forecast: action.forecast
                }
            )
        default:
            return state;
    }
}