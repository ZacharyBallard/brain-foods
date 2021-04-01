import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { MealsReducer, initialState } from './reducer';


export const ConfigureStore = () => {
    const store = createStore(
        MealsReducer,
        initialState,
        applyMiddleware(thunk)
    );

    return store;
}