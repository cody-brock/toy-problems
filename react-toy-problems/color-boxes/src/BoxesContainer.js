import React, { Component } from 'react';
import Box from './Box';
import './BoxesContainer.css';

class BoxesContainer extends Component {
  static defaultProps = {
    numBoxes: 18
  }
  render() {
    const boxes = Array.from ({ length: this.props.numBoxes }).map(() => (
      <Box />
    ))
    return(
      <div className="BoxesContainer">{boxes}</div>
    )
  }
}

export default BoxesContainer;