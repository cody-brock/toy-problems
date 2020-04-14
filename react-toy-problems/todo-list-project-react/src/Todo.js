import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      editTodoText: ''
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // When user clicks delete, removes that one
  handleDelete(evt) {
    evt.preventDefault();
    this.props.removeTodo(this.props.id);
  }

  // When user clicks 'update' next to todo...
    // Puts the associated text into editable form
  handleEdit(evt) {
    evt.preventDefault();
    this.setState({ isEditing: true, editTodoText: this.props.todoText });
  }

  // When user clicks 'update' next to todo...
  handleUpdate(evt) {
    evt.preventDefault();
    this.setState({ isEditing: false });
    // props here - like delete!
    this.props.editTodo(this.state.editTodoText, this.props.id);
  }

  // Handles state in the form
  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleToggle(evt) {
    this.props.toggleCompletion(this.props.id);
  }

  render() {
    let result;
    if (!this.state.isEditing) {
      result = (
        <div>
          <li className={this.props.completed ? "completed" : ""} onClick={this.handleToggle}>
            {this.props.todoText}
          </li>
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    } else {
      result = (
        <form>
          <label htmlFor='editTodoText'>Edit:</label>
          <input 
            name='editTodoText'
            id='editTodoText'
            type='text'
            value={this.state.editTodoText}
            onChange={this.handleChange}
          />
          <button onClick={this.handleUpdate}>Save</button>
        </form>
      )
    }

    return(
      <div>
        {result}
      </div>
    )
  }
}

export default Todo;