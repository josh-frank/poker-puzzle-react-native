import React, { useRef } from "react";

import { Animated, Button, Image, Pressable } from "react-native";

import { requireCardImage } from "../utilities/cardImagePaths";

import style from "../stylesheet"

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToGuess, removeFromGuess } from "../redux/actions";

function Card( { dispatch, card, game } ) {
    
    const flipAnimation = useRef( new Animated.Value( 0 ) ).current;

    const guessed = game.guess.includes( card );

    const flipToFrontStyle = {
        transform: [
            { rotateY: flipAnimation.interpolate( {
                inputRange: [ 0, 180 ],
                outputRange: [ "0deg", "180deg" ]
            } ) }
        ]
    };

    const flipToBackStyle = {
        transform: [
            { rotateY: flipAnimation.interpolate( {
                inputRange: [ 0, 180 ],
                outputRange: [ "180deg", "360deg" ]
            } ) }
        ]
    };

    const flipToFront = () => {
        Animated.timing( flipAnimation, {
            toValue: 180,
            duration: 300,
            useNativeDriver: true
        } ).start();
    };

    const flipToBack = () => {
        Animated.timing( flipAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        } ).start();
    };

    return (
        <Pressable
            style={ style.cardWrapper }
            onPress={ () => dispatch( guessed ? removeFromGuess( card ) : addToGuess( card ) ) }
        >
            <Animated.Image
                style={ guessed ? { ...style.cardFront, ...style.selected, ...flipToBackStyle } : { ...style.cardFront, ...flipToBackStyle } }
                source={ requireCardImage[ card ] }
            />
            <Animated.Image
                style={ guessed ? { ...style.cardBack, ...style.selected, ...flipToFrontStyle } : { ...style.cardBack, ...flipToFrontStyle } }
                source={ requireCardImage[ 0 ] }
            />
            <Button title="Flip" onPress={ flipToFront }>Flip</Button>
        </Pressable>
    );

}

const mapStateToProps = ( state, props ) => {
    return { ...props, game: state.game };
}

const mapDispatchToProps = dispatch => ( {
    dispatch, ...bindActionCreators( { addToGuess }, dispatch ), ...bindActionCreators( { removeFromGuess }, dispatch )
} );
  
export default connect( mapStateToProps, mapDispatchToProps )( Card );
