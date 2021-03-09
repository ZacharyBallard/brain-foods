import meals from '../shared/meals';
import * as ActionTypes from './ActionTypes';


export const initialState = {
    meals
};


export const Reducer = (state = initialState, action) => {
    return state;
}

export const MealsReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.ADD_MEAL:
            const meal = action.payload;
            return {...state, meals: state.meals.concat(meal)};
        default:
            return state;
    }
}