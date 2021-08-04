import React from "react";

import { View } from "react-native";

import Card from "./Card";

import style from "../stylesheet"
import { connect } from "react-redux";
// import { bestHand, evaluateHand } from "../utilities/boardLogic";
// import { cardName } from "../utilities/pokerLogic";

function Board( { game } ) {
  // if ( game.guess ) {
  //   console.log( "evaluateHand: ", evaluateHand( game.board, game.guess ) );
  //   console.log( "bestHand: ", bestHand( game.board, 5 ).map( cardName ) );
  // }

  return game.board && (
    <View style={ style.boardContainer }>
        { game.board.map( ( row, index ) => <View
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

const mapStateToProps = ( state, props ) => {
  return { ...props, game: state.game };
}

export default connect( mapStateToProps )( Board );

