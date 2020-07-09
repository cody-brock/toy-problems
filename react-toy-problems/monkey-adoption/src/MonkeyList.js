import React, { Component } from 'react';
import './MonkeyList.css';

class MonkeyList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(monkeyName) {
    this.props.history.push(`/monkeys/${monkeyName}`)
  }

  render() {
    return (
      <div className="MonkeyList">
        <h1>Click a Monkey</h1>
          <div className="container">
            <div className="row">
              {this.props.monkeys.map(m =>
                <div className="Monkey col-lg-4 text-center" key={m.name}>
                  <img src={m.img} alt={m.name} onClick={() => this.handleClick(m.name)} />
                  <button onClick={() => this.handleClick(m.name)}>
                    <div>{m.name}</div>
                  </button>
                </div>
              )}
            </div>
          </div>


      </div>
    )
  }
}

export default MonkeyList;