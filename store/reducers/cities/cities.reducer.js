import { ADD_CITY, DELETE_CITY, REFRESH_CITY } from '../../actions'

export default function (state = [], action) {
    console.log(action);
    switch (action.type) {
        case ADD_CITY:
            const isExists = state.some((item) => item.name === action.payload.name)
            if (isExists) {
                return state.map((item) => item.name === action.payload.name ? action.payload : item);
            }
            return [...state, action.payload];
        case DELETE_CITY:
            return state.filter((item) => item.id !== action.payload);
        case REFRESH_CITY:
            console.log(action.payload, 'my response');
            return state.map((item) => item.id === action.payload.id ? action.payload : item);
        default:
            return state;
    }
}