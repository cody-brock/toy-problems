import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Coke extends Component {
  render() {
    return(
      <div>
        <h1>Delicious coca cola</h1>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Coke;