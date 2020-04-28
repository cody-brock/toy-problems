import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Chips extends Component {
  render() {
    return(
      <Message>
        <h1>Chips here!</h1>
        <Link to='/'>Home</Link>
      </Message>
    )
  }
}

export default Chips