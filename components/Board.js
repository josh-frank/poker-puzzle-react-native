import React from "react";

import { View } from "react-native";

import Card from "./Card";

import style from "../stylesheet"

export default function Board( { gameState } ) {

  return gameState.board && (
    <View style={ style.boardContainer }>
        { gameState.board.map( ( row, index ) => <View
          key={ index }
          style={ style.boardRow }
        >
          { row.map( ( card, index ) => <Card
            key={ index }
            card={ card }
          /> ) }
        </View> ) }
    </View>
  );

}
