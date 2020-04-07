import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers'

class Flipper extends Component {

  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'http://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'http://tinyurl.com/react-coin-tails-jpg' },
    ]
  }

  constructor(props) {
    super(props);
    this.state = { 
      currCoin: null, 
      imageSource: props.coins[0].imgSrc,
      numClicks: 0, 
      numHeads: 0, 
      numTails: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        numClicks: st.numClicks + 1,
        numHeads: st.numHeads + (newCoin.side === "heads" ? 1 : 0),
        numTails: st.numTails + (newCoin.side === "tails" ? 1 : 0),
      }
    });
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return(
      <div>
        <h1>Let's flip a coin...</h1>
        <p>{this.state.side}</p>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <p>Out of {this.state.numClicks} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails</p>
        <button onClick={this.handleClick}>Flip Again!</button>
      </div>

    )
  }
}

export default Flipper;