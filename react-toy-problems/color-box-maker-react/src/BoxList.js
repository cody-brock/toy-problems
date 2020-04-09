import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boxData: []
    }
    this.addNewBox = this.addNewBox.bind(this);
    this.renderBoxes = this.renderBoxes.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addNewBox(box) {
    let newBox = { ...box, id: uuidv4() }
    this.setState(state => ({
      boxData: [...state.boxData, newBox]
    }));
  }

  removeBox(idToRemove) {
    let newBoxData = this.state.boxData.filter(box => box.id !== idToRemove);
    this.setState({ boxData: newBoxData });
  }

  renderBoxes() {
    return(
      <div>
        {this.state.boxData.map(box => (
            <Box
              height={box.height}
              width={box.width}
              color={box.color}
              key={box.id}
              id={box.id}
              removeBox={this.removeBox}
            />
        ))}
      </div>
    )
  }

  render() {
    return(
      <div>
        <NewBoxForm addNewBox={this.addNewBox} />
        {this.renderBoxes()}
      </div>
    )
  }
}

export default BoxList;