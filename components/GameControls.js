import React from "react";

import { Text, TouchableOpacity, View } from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { newGame, makeGuess } from "../redux/actions";

import GuessDisplay from "./GuessDisplay";

function GameControls( { dispatch, game } ) {

    return (
        <View style={ style.controlsContainer }>
            <TouchableOpacity
                style={ style.controlButton }
                disabled={ !game.played }
                onPress={ () => dispatch( newGame() ) }
            >
                <Text style={ style.controlButtonText }>Deal</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={ style.controlButton }
                disabled={ game.played }
                onPress={ () => dispatch( makeGuess() ) }
            >
                <Text style={ style.controlButtonText }>Guess</Text>
            </TouchableOpacity>
            <GuessDisplay />
        </View>
    );

}

const mapStateToProps = ( state, props ) => {
    return { ...props, game: state.game };
}

const mapDispatchToProps = dispatch => ( {
    dispatch, ...bindActionCreators( { newGame }, dispatch ), ...bindActionCreators( { makeGuess }, dispatch )
} );

export default connect( mapStateToProps, mapDispatchToProps )( GameControls );
