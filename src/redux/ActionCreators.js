import * as ActionTypes from './ActionTypes';



export const postMeal = (name, almonds, avocado, beef, blueberries, darkChocolate, darkLeafyGreens, eggs, extraVirginOliveOil, salmon, description, directions) => dispatch => {
    const newMeal = {
        name, 
        almonds, 
        avocado, 
        beef, 
        blueberries, 
        darkChocolate, 
        darkLeafyGreens, 
        eggs, 
        extraVirginOliveOil, 
        salmon, 
        description, 
        directions
    };
    setTimeout(() => {
        dispatch(addMeal(newMeal));
    }, 2000
);
}


export const addMeal = meal =>({
    type: ActionTypes.ADD_MEAL,
    payload: meal
})
