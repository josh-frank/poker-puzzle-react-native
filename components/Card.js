import React from "react";
import { StyleSheet, Image } from "react-native";
import { requireCardImage } from "../utilities/cardImagePaths";

export default function Card( { card } ) {

    return (
        <Image
            style={ stylesheet.card }
            source={ requireCardImage[ card ]() }
        />
    );

}

const stylesheet = StyleSheet.create( {
    card: {
        width: 80,
        height: 80,
        margin: "2%"
    },
    // : {},
  } );
  
