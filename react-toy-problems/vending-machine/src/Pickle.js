import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Pickle extends Component {
  render() {
    return(
      <Message>
        <h1>I got a pickle hey hey</h1>
        <Link to='/'>Home</Link>
      </Message>
    )
  }
}

export default Pickle;