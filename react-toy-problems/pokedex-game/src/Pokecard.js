import React, { Component } from 'react'

class Pokecard extends Component {
  // const {name, type, exp} = this.props;
  render(props) {
    return(
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <p>{this.props.type}</p>
        <p>{this.props.exp}</p>
      </div>
    )
  }
}


// function Pokecard(props) {
//     return(
//       <div>
//         <h1>{props.name}</h1>
//         <p>{props.type}</p>
//         <p>{props.base_experience}</p>
//       </div>
//     )
// }

export default Pokecard;