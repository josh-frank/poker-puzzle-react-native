import React from "react";

import { Image, Pressable } from "react-native";

import { requireCardImage } from "../utilities/cardImagePaths";

import style from "../stylesheet"

export default function Card( { card, gameState, setGameState } ) {

    const guessed = gameState.guess.includes( card );

    return (
        <Pressable
            style={ style.cardWrapper }
            onPress={ () => setGameState( {
                board: gameState.board,
                guess: guessed ? gameState.guess.filter( guessCard => guessCard !== card ) : [ ...gameState.guess, card ]
            } ) }
        >
            <Image
                style={ guessed ? { ...style.cardImage, ...style.selected } : style.cardImage }
                source={ requireCardImage[ card ] }
            />
        </Pressable>
    );

}
