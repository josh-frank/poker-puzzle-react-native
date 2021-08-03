import React from "react";

import { TextInput } from "react-native";

import { cardName } from "../utilities/pokerLogic";

import style from "../stylesheet"

import { connect } from "react-redux";

function GuessDisplay( { game } ) {

    return (
        <TextInput
            style={ style.guessDisplay }
            multiline={ true }
            editable={ false }
            numberOfLines={ 5 }
            value={ game.guess ? game.guess.map( cardName ).join( "\n" ) : "" }
        />
    );

}

const mapStateToProps = ( state, props ) => {
    return { ...props, game: state.game };
}

export default connect( mapStateToProps )( GuessDisplay );
