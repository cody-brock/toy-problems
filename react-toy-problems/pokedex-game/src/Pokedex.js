import React, { Component } from 'react';
import PokeCard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>
    }
    return(
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((poke) => 
            <PokeCard 
              key={poke.id}
              name={poke.name}
              type={poke.type}
              exp={poke.base_experience}
              id={poke.id}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Pokedex;