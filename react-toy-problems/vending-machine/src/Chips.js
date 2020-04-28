import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component {
  render() {
    return(
      <div>
        <h1>Chips here!</h1>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Chips