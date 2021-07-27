import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import React from "react";

import { ImageBackground, StyleSheet, View } from "react-native";

export default function App() {

  return (
    <ImageBackground 
      source={ require( "./assets/green_felt.jpg" ) }
      style={ stylesheet.backgroundImage }
    >
      <View style={ stylesheet.container }>
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
