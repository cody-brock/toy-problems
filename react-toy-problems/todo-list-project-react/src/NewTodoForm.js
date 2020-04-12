import React, { Component } from 'react';

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
    console.log('handleClick fired')
    this.props.addTodo(this.state.todo);
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
        <button onClick={this.handleClick}>X</button>
      </form>
    )
  }
}

export default NewTodoForm;