import React, { Component } from 'react';

class MonkeyDetails extends Component {
  render(props) {
    return(
      <div>
        <h2>MonkeyDetails</h2>
        <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age}</div>
        <div>Toes: {this.props.toes}</div>
        <div>Fun Fact: {this.props.funFact}</div>
        <img src={this.props.img} alt={this.props.name} />
      </div>

    )
  }
}

export default MonkeyDetails;