import { REQUEST } from '../../middlewares/request'
export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';
export const REFRESH_CITY = 'REFRESH_CITY';

export const addCity = (cityName) => {
    return {
        type: REQUEST,
        payload: {
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&apikey=064816ee9a05481d29a987983c4242e6&units=metric`,
            successAction: addCityResponse,
        }
    }
}

export const addCityResponse = (response) => {
    return {
        type: ADD_CITY,
        payload: response,
    }
};

export const deleteCity = (cityId) => {
    return {
        type: DELETE_CITY,
        payload: cityId
    }
};

export const refreshCity = (cityId) => {
    return {
        type: REQUEST,
        payload: {
            url: `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&apikey=064816ee9a05481d29a987983c4242e6&units=metric`,
            successAction: refreshCityResponse,
        }
    }
};

export const refreshCityResponse = (response) => {
    return {
        type: REFRESH_CITY,
        payload: response,
    }
};