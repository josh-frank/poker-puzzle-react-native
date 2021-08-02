import React from "react";

import { View } from "react-native";

import Board from "./Board";

import style from "../stylesheet"
import GameControls from "./GameControls";

export default function GameScreen( { gameState, setGameState } ) {

    return (
        <View style={ style.gameContainer }>
            <Board
                gameState={ gameState }
                setGameState={ setGameState }
            />
            <GameControls gameState={ gameState }/>
        </View>
    );

}
