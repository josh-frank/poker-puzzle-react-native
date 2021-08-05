import { combineReducers } from 'redux';
import { evaluateHand } from '../utilities/boardLogic';

const initialState = {
    board: [],
    guess: [],
    credits: 0,
    played: false,
    message: " "
};

const gameReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case "NEW_GAME":
            return { ...state, ...action.payload };
        case "ADD_TO_GUESS":
            return { ...state, guess: [ ...state.guess, action.payload ] };
        case "REMOVE_FROM_GUESS":
            return { ...state, guess: state.guess.filter( guessCard => guessCard !== action.payload ) };
        case "MAKE_GUESS":
            const handEvaluation = evaluateHand( state.board, state.guess );
            switch ( handEvaluation ) {
                case 1:
                    return { ...state, played: true, message: "Correct" };
                case 0:
                    return { ...state, played: true, message: "Incorrect" };
                case -1:
                    return { ...state, played: false, message: "Invalid hand" };
                default: return state;
            }
        default:
            return state;
    }
};
  
export default combineReducers( {
    game: gameReducer
} );
