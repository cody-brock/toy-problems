import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>Vending Machine here!</h1>
        <Link to='Coke'>Coke</Link>
        <Link to='Pickle'>Pickle</Link>
        <Link to='Chips'>Chips</Link>
      </div>
    )
  }
}

export default VendingMachine;