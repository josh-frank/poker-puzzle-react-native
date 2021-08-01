import React from "react";

import { View } from "react-native";

import Board from "./Board";

import style from "../stylesheet"

export default function GameScreen( { gameState } ) {

    return (
        <View style={ style.gameContainer }>
            <Board
                gameState={ gameState }
            />
        </View>
    );

}
