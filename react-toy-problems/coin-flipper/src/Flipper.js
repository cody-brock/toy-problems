import React, { Component } from 'react';

class Flipper extends Component {
  // static defaultProps = {
    
  // }
  constructor(props) {
    super(props);
    this.state = { side: 'heads', numClicks: 0, numHeads: 0, numTails: 0}
    this.handleClick = this.handleClick.bind(this);
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    let randNum = Math.random()
    if (randNum > .5) {
      this.setState(st => {
        return { side: 'heads', numHeads: st.numHeads + 1 };
      });
    } else {
      this.setState(st => {
        return { side: 'tails', numTails: st.numTails + 1 };
      });
    }
  }

  handleClick() {
    this.setState(st => {
      return { numClicks: st.numClicks + 1 };
    });
    this.flipCoin();
  }

  render() {
    return(
      <div>
        <h1>Let's flip a coin...</h1>
        <p>{this.state.side}</p>
        <p>Out of {this.state.numClicks} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails</p>
        <button onClick={this.handleClick}>Flip Again!</button>
      </div>

    )
  }
}

export default Flipper;