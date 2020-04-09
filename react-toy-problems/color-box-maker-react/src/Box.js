import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeBox(this.props.id);
  }

  render() {
    const divStyle = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
      backgroundColor: this.props.color
    }
    return(
      <div>
        <div style={divStyle}></div>
        <button onClick={this.handleClick}>Remove Box!</button>
      </div>
    )
  }
}

export default Box;