import React, { Component } from 'react';

class MonkeyDetails extends Component {
  render() {
    const correctMonkey = this.props.monkeys.find(o => o.name === this.props.match.params.name);
    return(
      <div>
        <h2>MonkeyDetails</h2>
        <div>monkey: {correctMonkey.name}</div>
        <div>Name: {correctMonkey.name}</div>
        <div>Age: {correctMonkey.age}</div>
        <div>Toes: {correctMonkey.toes}</div>
        <div>Fun Fact: {correctMonkey.funFact}</div>
        <img src={correctMonkey.img} alt={correctMonkey.name} />
      </div>

    )
  }
}

export default MonkeyDetails;