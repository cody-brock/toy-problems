import React, { Component } from 'react';
import MonkeyDetails from './MonkeyDetails';

class MonkeyList extends Component {

  render() {
    return (
      <div>
        <h1>MonkeyList - Click a Monkey</h1>
        {this.props.monkeys.map(m =>
          <MonkeyDetails 
            key={m.id}
            name={m.name}
            age={m.age}
            toes={m.toes} 
            funFact={m.funFact}
            img={m.img}
          />
        )}
      </div>
    )
  }
}

export default MonkeyList;