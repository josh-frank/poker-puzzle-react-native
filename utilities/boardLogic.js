const { handRank } = require("./pokerLogic");

const sortDescending = ( x, y ) => y - x;

const adjacentSquares = ( coordinates, board ) => {
    const horizontal = [ coordinates[ 0 ] - 1, coordinates[ 0 ], coordinates[ 0 ] + 1 ];
    const vertical = [ coordinates[ 1 ] - 1, coordinates[ 1 ], coordinates[ 1 ] + 1 ];
    const cartesianProduct = ( ...horizontal ) => horizontal.reduce( ( horizontal, vertical ) => horizontal.flatMap( product1 => vertical.map( product2 => [ product1, product2 ].flat() ) ) );
    return cartesianProduct( horizontal, vertical ).filter( square =>
        square[ 0 ] > -1 && square[ 1 ] > -1 && square[ 0 ] < board.length && square[ 1 ] < board[ 0 ].length && !( square[ 0 ] === coordinates[ 0 ] && square[ 1 ] === coordinates[ 1 ] )
    );
}

const getPossibleHands = ( board, handLength, currentCoordinates, handSoFar, handList ) => {
    if ( handSoFar.length === handLength ) {
        let sortedHand = handSoFar.sort( sortDescending ).toString();
        if ( handList.indexOf( sortedHand ) < 0 ) { handList.push( sortedHand ); }
    } else {
        let nextSquares = adjacentSquares( currentCoordinates, board );
        for ( let nextSquare in nextSquares ) {
            let thisSquare = board[ currentCoordinates[ 0 ] ][ currentCoordinates[ 1 ] ];
            if ( handSoFar.indexOf( thisSquare ) < 0 ) { getPossibleHands( board, handLength, nextSquares[ nextSquare ], [ ...handSoFar, thisSquare ], handList ); }
        }
    }
}

exports.allPossibleHands = ( board, handLength ) => {
    let handList = [];
    for ( let row = 0; row < board.length; row++ ) for ( let column = 0; column < board[ 0 ].length; column++ )
        getPossibleHands( board, handLength, [ row, column ], [], handList );
    return Object.fromEntries( handList.map( hand => [ hand, handRank( hand.split( "," ).map( card => parseInt( card ) ) ) ] ) );
}

exports.bestHand = ( board, handLength ) => {
    const allPossibleHands = this.allPossibleHands( board, handLength );
    return Object.keys( allPossibleHands ).reduce( ( thisHand, thatHand ) =>
        allPossibleHands[ thisHand ] > allPossibleHands[ thatHand ] ? thatHand : thisHand
    ).split( "," ).map( card => parseInt( card ) );
}
