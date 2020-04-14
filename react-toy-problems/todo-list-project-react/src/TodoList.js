import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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

  editTodo(newText, idToEdit) {
    let returnData = this.state.todoData;
    for (let i = 0; i < returnData.length; i++) {
      // console.log(this.state.todoData[i].id);
      if (returnData[i].id === idToEdit) {
        returnData[i].todoText = newText;
        this.setState({ todoData: returnData });
        // this.setState({ todoText: newText }); // I think this line is the problem - have to setState for todoData
      }
    }
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todoData.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed};
      }
      return todo;
    })
    this.setState({ todoData: updatedTodos });
  }

  render() {
    return(
      <div>
        {this.state.todoData.map((c) => (
          <Todo 
            todoText={c.todoText}
            id={c.id}
            key={c.id}
            completed={c.completed}
            removeTodo={this.removeTodo}
            editTodo={this.editTodo}
            toggleCompletion={this.toggleCompletion}
          /> 
        ))}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodoList;