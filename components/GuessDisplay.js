import React from "react";

import { TextInput } from "react-native";

import { cardName } from "../utilities/pokerLogic";

import style from "../stylesheet"

export default function GuessDisplay( { guess } ) {

    return (
        <TextInput
            style={ style.guessDisplay }
            multiline={ true }
            editable={ false }
            numberOfLines={ 5 }
            value={ guess.map( cardName ).join( "\n" ) }
        />
    );

}