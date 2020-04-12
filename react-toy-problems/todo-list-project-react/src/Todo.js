import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.removeTodo(this.props.id);
  }

  render() {
    return(
      <div>
        <div>{this.props.todoText}</div>
        <button onClick={this.handleClick}>X</button>
      </div>
    )
  }
}

export default Todo;