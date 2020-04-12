import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [{ todoText: 'Take out trash', id: 'trashOne', key: 'trashOne' }, { todoText: 'Feed dragon', id: 'dragonOne', key: 'dragonOne' }]
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState(state => ({
      todoData: [...state.todoData, newTodo]
    }));
  }

  removeTodo(idToRemove) {
    let newTodoData = this.state.todoData.filter(c => c.id !== idToRemove);
    this.setState({ todoData: newTodoData });
  }

  render() {
    return(
      <div>
        {this.state.todoData.map((c) => (
          <Todo 
            todoText={c.todoText}
            id={c.id}
            key={c.id}
            removeTodo={this.removeTodo}
          /> 
        ))}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodoList;