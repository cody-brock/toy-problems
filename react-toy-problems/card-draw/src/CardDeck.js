import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

const API_BASE_URL = `https://deckofcardsapi.com/api/deck`

class CardDeck extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      deck: null,
      drawn: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    console.log('deck: ', deck.data);
    this.setState({ deck: deck.data });
  }

  async drawNextCard() {
    // if (this.state.cards.length >= 52) {
    //   return alert('No more cards!');
    // }
    try {
      let cardRes = await axios.get(`${API_BASE_URL}/${this.state.deck.deck_id}/draw/`)
      if (!cardRes.data.success) {
        throw new Error("No card remaining")
      }
      let card = cardRes.data.cards[0];
      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code, 
            image: card.image, 
            name: `${card.value} of ${card.suit}`
          }
        ]
      }))
    } catch(err) {
      alert(err);
    }
  }

  handleClick(evt) {
    evt.preventDefault();
    this.drawNextCard()
  }

  render() {
    return(
      <div>
        <div>
          <h1>Card Drawer</h1>
          <button onClick={this.handleClick}>Draw Card</button>
        </div>
        <div>
          {this.state.drawn.map((card) => (
            <Card 
              image={card.image}
              key={card.id}
              name={card.name}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default CardDeck;