import React, { useEffect } from "react";

import { Text, View } from "react-native";

import Board from "./Board";

import style from "../stylesheet"
import { connect } from "react-redux";
import { newGame } from "../redux/actions";
import { fullDeck } from "../utilities/pokerLogic";

import GameControls from "./GameControls";

function GameScreen( { dispatch } ) {
    
    useEffect( () => {
        const deck = fullDeck( 1 );
        dispatch( newGame() );
    }, [] );

    return (
        <View style={ style.gameContainer }>
            <Text style={ style.gameInfoText }>Credits: 0</Text>
            <Board />
            <GameControls />
            <Text style={ style.gameInfoText }>Game status</Text>
        </View>
    );

}

const mapStateToProps = ( state, props ) => {
    return { ...props, game: state.game };
}

export default connect( mapStateToProps )( GameScreen );
