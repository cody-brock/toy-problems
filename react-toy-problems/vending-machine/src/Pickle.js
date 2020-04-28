import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pickle extends Component {
  render() {
    return(
      <div>
        <h1>I got a pickle hey hey</h1>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Pickle;