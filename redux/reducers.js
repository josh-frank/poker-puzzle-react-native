import { combineReducers } from 'redux';
import { evaluateHand } from '../utilities/boardLogic';

const sortDescending = ( x, y ) => y - x;

const initialState = {
    board: null,
    guess: null,
    credits: 0,
    played: false,
    message: ""
};

const gameReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case "NEW_GAME":
            return action.payload;
        case "ADD_TO_GUESS":
            return { ...state, guess: [ ...state.guess, action.payload ] };
        case "REMOVE_FROM_GUESS":
            return { ...state, guess: state.guess.filter( guessCard => guessCard !== action.payload ) };
        // case "MAKE_GUESS":
        //     const handEvaluation = evaluateHand( state.board, state.guess );
        //     return { ...state };
        default:
            return state;
    }
};
  
export default combineReducers( {
    game: gameReducer
} );
