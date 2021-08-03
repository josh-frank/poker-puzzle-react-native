import React, { useEffect } from "react";

import { View } from "react-native";

import Board from "./Board";

import style from "../stylesheet"
import GameControls from "./GameControls";
import { connect } from "react-redux";
import { newGame } from "../redux/actions";
import { fullDeck } from "../utilities/pokerLogic";

function GameScreen( { dispatch } ) {
    
    useEffect( () => {
        const deck = fullDeck( 1 );
        dispatch( newGame() );
    }, [] );

    return (
        <View style={ style.gameContainer }>
            <Board />
            <GameControls />
        </View>
    );

}

const mapStateToProps = ( state, props ) => {
    return { ...props, game: state.game };
}

export default connect( mapStateToProps )( GameScreen );
