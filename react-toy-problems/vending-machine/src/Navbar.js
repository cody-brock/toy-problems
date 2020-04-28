import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <NavLink exact to='/' activeClassName='Navbar-active'>Home</NavLink>
        <NavLink exact to='/coke' activeClassName='Navbar-active'>Coke</NavLink>
        <NavLink exact to='/pickle' activeClassName='Navbar-active'>Pickle</NavLink>
        <NavLink exact to='/chips' activeClassName='Navbar-active'>Chips</NavLink>
      </div>
    )
  }
}

export default Navbar;