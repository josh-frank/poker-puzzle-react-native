import React from "react";

import { Text, TouchableOpacity, View } from "react-native";

import GuessDisplay from "./GuessDisplay";

export default function GameControls( { game } ) {

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