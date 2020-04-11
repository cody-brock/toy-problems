import React, { Component } from 'react';

class Todo extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return(
      <div>{this.props.todoText}</div>
    )
  }
}

export default Todo;