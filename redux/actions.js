import { fullDeck } from "../utilities/pokerLogic";

export const newGame = () => {
    const newDeck = fullDeck( 1 );
    return {
        type: "NEW_GAME",
        payload: {
            guess: [],
            board: [
                newDeck.slice( 0, 4 ),
                newDeck.slice( 4, 8 ),
                newDeck.slice( 8, 12 ),
                newDeck.slice( 12, 16 ),
            ]
        },
    }
};

export const addToGuess = card => ( { type: "ADD_TO_GUESS", payload: card } );
export const removeFromGuess = card => ( { type: "REMOVE_FROM_GUESS", payload: card } );
