import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import Navbar from './NavBar';
import Routes from './Routes';

class App extends Component {
  static defaultProps = {
    monkeys: [
      {id: 1, name: 'Cody', age: 28, toes: 10, funFact: 'He is known to run with scissors', img: 'https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1600-c85.jpg'},
      {id: 2, name: 'Kaitlin', age: 30, toes: 11, funFact: 'She has never been to the moon', img: 'https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2019/12/national-monkey-day-1-640x514.jpg'},
      {id: 3, name: 'Louie', age: 0.4, toes: 20, funFact: 'Part pig, part vampire', img: 'https://news.gsu.edu/files/2019/10/monkey-800x600.jpg'},
      {id: 4, name: 'Bean', age: 0.25, toes: '20-ish', funFact: 'Tiny cat in a big world', img: 'https://www.mercurynews.com/wp-content/uploads/2019/09/Francois-langur-monkey-in-S.jpg'},
    ]
  }
  render() {
    return(
      <div className="App">
        <Navbar monkeys={this.props.monkeys} />
        <div className="container">
          <Routes monkeys={this.props.monkeys} />
        </div>
      </div>
    )
  };
}

export default App;
