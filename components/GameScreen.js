import React, { useEffect } from "react";

import { Text, View } from "react-native";

import Board from "./Board";

import style from "../stylesheet"
import { connect } from "react-redux";
import { newGame } from "../redux/actions";

import GameControls from "./GameControls";

function GameScreen( { dispatch, game } ) {
    
    useEffect( () => {
        dispatch( newGame() );
    }, [] );

    return (
        <View style={ style.gameContainer }>
            <Text style={ style.gameInfoText }>Credits: 0</Text>
            <Board />
            <GameControls />
            <Text style={ style.gameInfoText }>{ game.message }</Text>
        </View>
    );

}

const mapStateToProps = ( state, props ) => {
    return { ...props, game: state.game };
}

export default connect( mapStateToProps )( GameScreen );
