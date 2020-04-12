import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [{ todoText: 'Take out trash' }, { todoText: 'Feed dragon' }]
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    console.log('in addTodo, in parent!  newTodo: ', newTodo);
    this.setState(state => ({
      todoData: [...state.todoData, {todoText: newTodo}]
    }));
  }

  render() {
    return(
      <div>
        {this.state.todoData.map((c) => (
          <Todo 
            todoText={c.todoText}
          /> 
        ))}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodoList;