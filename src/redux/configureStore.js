import { createStore } from 'redux';
import { MealsReducer, initialState } from './reducer';


export const ConfigureStore = () => {
    const store = createStore(
        MealsReducer,
        initialState
    );

    return store;
}