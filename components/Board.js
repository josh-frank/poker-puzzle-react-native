import React from "react";

import { StyleSheet, View } from "react-native";
import Card from "./Card";

export default function Board( { board } ) {

  return board && (
    <View style={ stylesheet.boardContainer }>
        { board.map( ( row, index ) => <View
          key={ index }
          style={ stylesheet.boardRow }
        >
          { row.map( ( card, index ) => <Card
            key={ index }
            card={ card }
          /> ) }
        </View> ) }
    </View>
  );

}

const stylesheet = StyleSheet.create( {
  boardContainer: {
    flexDirection: "column",
  },
  boardRow: {
    flexDirection: "row"
  },
  // : {},
} );
