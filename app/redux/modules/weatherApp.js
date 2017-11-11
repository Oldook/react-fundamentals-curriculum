const SET_CITY = 'SET_CITY';

export function setCity(city) {
    return {
        type: SET_CITY,
        city
    }
}

export default function reducer(state = { city: '' }, action) {
    switch (action.type) {
        case SET_CITY:
            return Object.assign(
                {},
                state,
                { city: action.city }
            )
        default:
            return state;
    }
}