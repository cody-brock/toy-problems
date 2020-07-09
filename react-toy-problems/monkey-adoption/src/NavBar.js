import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(monkeyName) {
    this.props.history.push(`/monkeys/${monkeyName}`)
  }

  render() {
    return(

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <NavLink to='/monkeys' className="navbar-brand">
          Monkey Adoption
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {this.props.monkeys.map(m => 
              <li className="nav-item" key={m.name}>
                <NavLink to={`/monkeys/${m.name}`} className="nav-link">
                  {m.name}
                </NavLink>
              </li>
            )}

          </ul>
        </div>
      </nav>



    )
  }
}

export default NavBar;