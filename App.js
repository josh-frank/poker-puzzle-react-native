import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { cardName, fullDeck } from "./utilities/pokerLogic";
import { bestHand } from "./utilities/boardLogic";

import GameScreen from "./components/GameScreen";

import style from "./stylesheet";

export default function App() {

  const [ gameState, setGameState ] = useState( {
    board: null,
    guess: []
  } );
  
  useEffect( () => {
    const deck = fullDeck( 1 );
    setGameState( { ...gameState, board: [
      deck.slice( 0, 4 ),
      deck.slice( 4, 8 ),
      deck.slice( 8, 12 ),
      deck.slice( 12, 16 ),
    ] } );
  }, [] );

  // if ( gameState.board ) console.log( bestHand( gameState.board, 5 ).map( cardName ) );

  return (
    <ImageBackground 
      source={ require( "./assets/green_felt.jpg" ) }
      style={ style.backgroundImage }
    >
      <GameScreen
        gameState={ gameState }
        setGameState={ setGameState }
      />
      <ExpoStatusBar style="auto" />
    </ImageBackground >
  );

}
