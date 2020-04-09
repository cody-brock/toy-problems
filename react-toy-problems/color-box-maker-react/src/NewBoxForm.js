import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      color: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let newBox = {height: this.state.height, width: this.state.width, color: this.state.color}
    this.props.addNewBox(newBox);
    this.setState({ height: "", width: "", color: "" })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='height'>Height: </label>
        <input
          type='number'
          id='height'
          name='height'
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor='width'>Width: </label>
        <input
          type='number'
          id='width'
          name='width'
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor='color'>Color: </label>
        <input
          type='text'
          id='color'
          name='color'
          value={this.state.color}
          onChange={this.handleChange}
        />
        <button>Add New Box!</button>
      </form>
    )
  }
}

export default NewBoxForm;