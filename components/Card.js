import { Image } from "react-native";

export default function Card() {

    return (
        <Image
            style={ stylesheet.card }
            source={ require( "./assets/cards/0.svg" ) }
        />
    );

}

const stylesheet = StyleSheet.create( {
    card: {
        width: 50,
        height: 50,
    },
    // : {},
  } );
  
