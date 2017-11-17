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

export function setLoading() {
    return {
        type: SET_LOADING
    }
}

export default function reducer(state = { city: '', loading: false, forecast: {} }, action) {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                city: action.city
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_FORECAST:
            return {
                ...state,
                city: action.city,
                loading: false,
                forecast: action.forecast
            }
        default:
            return state;
    }
}