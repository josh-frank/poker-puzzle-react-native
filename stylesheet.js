import { StyleSheet } from "react-native";

export default style = StyleSheet.create( {
    backgroundImage: {
      flex: 1,
      width: null,
      height: null
    },
    gameContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    boardContainer: {
        flexDirection: "column",
    },
    boardRow: {
        flexDirection: "row"
    },
    cardWrapper: {
        margin: "2%",
    },
    cardImage: {
        width: 80,
        height: 80,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    selected: {
        borderColor: "#FF0",
        borderWidth: 5,
        borderRadius: 5
    },
    // : {},
} );