import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [{ todoText: 'Take out trash' }, { todoText: 'Feed dragon' }]
    }
  }
  render() {
    return(
      <div>
        {this.state.todoData.map((c) => (
          <Todo 
            todoText={c.todoText}
          /> 
        ))}
      </div>
    )
  }
}

export default TodoList;