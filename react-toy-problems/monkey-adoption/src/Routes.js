import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MonkeyList from './MonkeyList';
import MonkeyDetails from './MonkeyDetails';

class Routes extends Component {
  render() {
    const getMonkey = props => {
      let name = props.match.params.name;
      let currentMonkey = this.props.monkeys.find(
        monkey => monkey.name.toLowerCase() === name.toLowerCase()
      );
      return <MonkeyDetails {...props} monkey={currentMonkey} />;
    }
    
    return(
      <Switch>
        <Route 
          exact 
          path='/monkeys'
          render={(routeProps) => <MonkeyList monkeys={this.props.monkeys} {...routeProps} />}
        />
        <Route 
          exact
          path='/monkeys/:name'
          render={getMonkey}
        />
        <Redirect to='/monkeys' />
      </Switch>
    )
  }
}

export default Routes;