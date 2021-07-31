import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import Board from "./components/Board";
import { cardName, fullDeck } from "./utilities/pokerLogic";
import { bestHand } from "./utilities/boardLogic";

export default function App() {
  
  const [ board, setBoard ] = useState( null );
  
  useEffect( () => {
    const deck = fullDeck( 1 );
    setBoard( [
      deck.slice( 0, 4 ),
      deck.slice( 4, 8 ),
      deck.slice( 8, 12 ),
      deck.slice( 12, 16 ),
    ] );
  }, [] );

  if ( board ) console.log( bestHand( board, 5 ).map( cardName ) );

  return (
    <ImageBackground 
      source={ require( "./assets/green_felt.jpg" ) }
      style={ stylesheet.backgroundImage }
    >
      <View style={ stylesheet.container }>
        <Board board={ board } />
        <ExpoStatusBar style="auto" />
      </View>
    </ImageBackground >
  );

}

const stylesheet = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  // : {},
} );
