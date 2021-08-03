import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";

import GuessDisplay from "./GuessDisplay";

function GameControls( { game } ) {

    return (
        <View style={ style.controlsContainer }>
            <TouchableOpacity
                style={ style.controlButton }
                onPress={ null }
            >
                <Text style={ style.controlButtonText }>Deal</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={ style.controlButton }
                onPress={ null }
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

export default connect( mapStateToProps )( GameControls );
