import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Coke extends Component {
  render() {
    return(
      <Message>
        <h1>Delicious coca cola</h1>
        <Link to='/'>Home</Link>
      </Message>
    )
  }
}

export default Coke;