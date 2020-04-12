import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({[evt.target.name]: evt.target.value});
  }

  handleClick(evt) {
    evt.preventDefault();
    let uuid = uuidv4();
    let newTodo = { todoText: this.state.todo, id: uuid, key: uuid };
    this.props.addTodo(newTodo);
    this.setState({ todo: '' });
  }

  render() {
    return(
      <form>
        <label htmlFor='todo'>New Todo: </label>
        <input
          name='todo'
          id='todo'
          type='text'
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add Todo!</button>
      </form>
    )
  }
}

export default NewTodoForm;