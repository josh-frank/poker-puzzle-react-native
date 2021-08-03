import React from "react";
import { ImageBackground } from "react-native";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { createStore } from "redux";
import { Provider } from "react-redux";
import gameReducer from './redux/reducers';

import GameScreen from "./components/GameScreen";

import style from "./stylesheet";

export default function App() {

  const store = createStore( gameReducer );

  return (
    <Provider store={ store }>
      <ImageBackground 
        source={ require( "./assets/green_felt.jpg" ) }
        style={ style.backgroundImage }
      >
        <GameScreen />
        <ExpoStatusBar style="auto" />
      </ImageBackground >
    </Provider>
  );

}
