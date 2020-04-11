import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nRows: 5,
    nCols: 5,
    chanceLightStartsOn: .25
  }

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    }
    this.flipCellsAround = this.flipCellsAround.bind(this);

    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < this.props.nRows; i++) {
      let newRow = [];
      for (let j = 0; j < this.props.nCols; j++) {
        newRow.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(newRow);
    }
    console.log(board);
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    // console.log("It's connected!")
    console.log("Coord: ", coord);
    let {nCols, nRows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      console.log("x: ", x)
      console.log("y: ", y)

      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        //Self
        board[y][x] = !board[y][x];
        //North
        if (y-1 >= 0) board[y-1][x] = !board[y-1][x];
        //South
        if (y+1 < nRows) board[y+1][x] = !board[y+1][x];
        //East
        if (x+1 < nCols) board[y][x+1] = !board[y][x+1];
        //West
        if (x-1 >= 0) board[y][x-1] = !board[y][x-1];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x);

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let numLit = board.flat().filter(bool => bool === true);
    console.log("numLit: ", numLit)
    if (numLit.length === 0) {
      console.log("WINNING CONDITION")
      this.setState({ hasWon: true })
    }

    this.setState({ board: board });
  }


  /** Render game board or winning message. */

  render() {

    // if the game is won, just show a winning msg & render nothing else

    // TODO
    return(
      <div>
        {this.state.hasWon
        ? <h1>You Win!</h1>
        : 
        <table>
          <tbody>
            {
              this.state.board.map((subArr, x) => {
                return <tr>
                  {
                    subArr.map((c, y) => {
                      let newCoord = `${x}-${y}`;
                      return <Cell 
                                key={newCoord}
                                coord={newCoord}
                                isLit={c}
                                flipCellsAround={this.flipCellsAround}
                              />
                    })
                  }
                </tr>
              })
            }
          </tbody>
        </table>
        }
      </div>
      // make table board

  
      // TODO
    )
  }
}


export default Board;
