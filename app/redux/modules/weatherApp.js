const SET_CITY = 'SET_CITY';
const SET_FORECAST = 'SET_FORECAST';
const SET_DETAILS = 'SET_DETAILS';
const LOADING_ON = 'LOADING_ON';
const LOADING_OFF = 'LOADING_OFF';

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

export function setForecastApiRequest(city) {
    return {
        type: 'FORECAST_API_REQUEST',
        city
    }
}

export function setLoadingOn() {
    return {
        type: LOADING_ON
    }
}

export function setLoadingOff() {
    return {
        type: LOADING_OFF
    }
}

export function setDetails(details) {
    return {
        type: SET_DETAILS,
        details
    }
}

export default function reducer(state = { city: '', loading: true, forecast: {}, details: {} }, action) {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                city: action.city
            };
        case LOADING_ON:
            return {
                ...state,
                loading: true
            };
        case LOADING_OFF:
            return {
                ...state,
                loading: false
            };
        case SET_FORECAST:
            return {
                ...state,
                forecast: action.forecast
            };
        case SET_DETAILS:
            return {
                ...state,
                details: action.details
            };
        default:
            return state;
    }
}