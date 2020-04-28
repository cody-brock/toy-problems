import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Coke from './Coke';
import Pickle from './Pickle';
import Chips from './Chips';

function App() {
  return (
    <div className="App">
      <div className="App-nav">
        <NavLink to='/' activeClassName='selected'>Home</NavLink>
        <NavLink to='/coke' activeClassName='selected'>Coke</NavLink>
        <NavLink to='/pickle' activeClassName='selected'>Pickle</NavLink>
        <NavLink to='/chips' activeClassName='selected'>Chips</NavLink>

      </div>


      <Switch>
        <Route exact path='/' component={VendingMachine} />
        <Route exact path='/coke' component={Coke} />
        <Route exact path='/pickle' component={Pickle} />
        <Route exact path='/chips' component={Chips} />
      </Switch>




    </div>
  );
}

export default App;
