import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Coke from './Coke';
import Pickle from './Pickle';
import Chips from './Chips';

function App() {
  return (
    <div className="App">
      <Navbar />
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
