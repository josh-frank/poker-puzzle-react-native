import React from "react";
import { StyleSheet, Image } from "react-native";

export default function Card( { card } ) {

    return (
        <Image
            style={ stylesheet.card }
            source={ require( `../assets/cards/png/${ card }.png` ) }
        />
    );

}

const stylesheet = StyleSheet.create( {
    card: {
        width: 50,
        height: 50,
        margin: "5px"
    },
    // : {},
  } );
  
