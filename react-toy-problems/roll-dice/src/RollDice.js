import React, { Component } from 'react';
import Die from './Die';
// import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: 4, num2: 5 };
    this.genNums = this.genNums.bind(this);
  }

  genNums() {
    let rand1 = Math.floor(Math.random() * 6) + 1
    let rand2 = Math.floor(Math.random() * 6) + 1
    this.setState({ num1: rand1, num2: rand2  });
  }


  render() {
    return(
      <div>
        <Die val={this.state.num1} />
        <Die val={this.state.num2} />
        <button onClick={this.genNums}>Roll Dice!</button>
      </div>
    )
  }
}

export default RollDice;