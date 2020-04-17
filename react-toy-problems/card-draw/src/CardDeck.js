import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';


class CardDeck extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      id: '',
      cards: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle`
    axios.get(url).then(response => {
      console.log(response.data);
      this.setState({ id: response.data.deck_id });
    })
  }

  drawNextCard() {
    if (this.state.cards.length >= 52) {
      return alert('No more cards!');
    }
    const drawUrl = `https://deckofcardsapi.com/api/deck/${this.state.id}/draw/`
    axios.get(drawUrl).then(response => {
      console.log(response.data);
      let newCardImg = response.data.cards[0].image;
      let newCardKey = response.data.cards[0].code;
      // console.log(newCardImg);
      this.setState(state => ({
        cards: [...state.cards, {img: newCardImg, key: newCardKey}]
      }));
    });
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
          {this.state.cards.map((card) => (
            <Card 
              imgSrc={card.img}
              key={card.key}
            />
          ))}
        </div>
      </div>
      
    )
  }
}

export default CardDeck;