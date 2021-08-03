import { combineReducers } from 'redux';

const initialState = {
    board: null,
    guess: null
};

const gameReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case "NEW_GAME":
            return action.payload;
        case "ADD_TO_GUESS":
            return { ...state, guess: [ ...state.guess, action.payload ] };
        case "REMOVE_FROM_GUESS":
            return { ...state, guess: state.guess.filter( guessCard => guessCard !== action.payload ) };
        default:
            return state;
    }
};
  
export default combineReducers( {
    game: gameReducer
} );
