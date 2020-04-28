import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';


class VendingMachine extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>Vending Machine here!</h1>
        </Message>
        <Message>
          <Link to='Coke'>Coke</Link>
          <Link to='Pickle'>Pickle</Link>
          <Link to='Chips'>Chips</Link>
        </Message>
      </div>
    )
  }
}

export default VendingMachine;