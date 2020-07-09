import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MonkeyList.css';

class MonkeyList extends Component {
  render() {
    return (
      <div className="MonkeyList">
        <h1 className="my-5">Click a Monkey</h1>
        <div className="row">
          {this.props.monkeys.map(m =>
            <div className="Monkey col-lg-4 text-center" key={m.name}>
              <img src={m.img} alt={m.name} />
              <Link to={`/monkeys/${m.name}`}>
                <div className="underline">{m.name}</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MonkeyList;