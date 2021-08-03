import React from "react";

import { Image, Pressable } from "react-native";

import { requireCardImage } from "../utilities/cardImagePaths";

import style from "../stylesheet"

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToGuess, removeFromGuess } from "../redux/actions";

function Card( { dispatch, card, game } ) {

    const guessed = game.guess.includes( card );

    return (
        <Pressable
            style={ style.cardWrapper }
            onPress={ () => dispatch( guessed ? removeFromGuess( card ) : addToGuess( card ) ) }
        >
            <Image
                style={ guessed ? { ...style.cardImage, ...style.selected } : style.cardImage }
                source={ requireCardImage[ card ] }
            />
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
