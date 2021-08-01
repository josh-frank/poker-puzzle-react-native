import React from "react";

import { Image } from "react-native";

import { requireCardImage } from "../utilities/cardImagePaths";

import style from "../stylesheet"

export default function Card( { card } ) {

    return (
        <Image
            style={ style.card }
            source={ requireCardImage[ card ] }
        />
    );

}
