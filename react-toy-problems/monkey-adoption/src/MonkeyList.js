import React, { Component } from 'react';

class MonkeyList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/monkeys/${}`)
  }

  render() {
    return (
      <div>
        <h1>MonkeyList - Click a Monkey</h1>

        {this.props.monkeys.map(m =>
          <div>
            <img src={m.img} alt={m.name}/>
            <button onClick={this.handleClick}>
              <div>{m.name}</div>
            </button>
          </div>
        )}

      </div>
    )
  }
}

export default MonkeyList;