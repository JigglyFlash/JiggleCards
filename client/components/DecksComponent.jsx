import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Deck from './Deck.jsx';
import Card from './Card.jsx';

const DecksComponent = () => {
  // pull the decks from the user store --> do we even need a deckReducer??
  const decks = useSelector((store) => store.user.decks); // if guest, will return empty array
  const activeDeck = useSelector((store) => store.user.activeDeck);

  // console.log('decks coming from store: ', decks);

  // top line conditional to check if activeDeck exists
  // if (activeDeck) then render the cards in that deck
  // if (!activeDeck) then render the decks pulled from the store

  const displayArray = [];
  if (!activeDeck) {
    for (let i = 0; i < decks.length; i++) {
      const deck = <Deck deckTitle={decks[i].title} key={i} />;
      displayArray.push(deck);
    }
  } else {
    decks.forEach((deck) => {
      if (deck.title === activeDeck) {
        for (let i = 0; i < deck.cards.length; i++) {
          const card = <Deck deckTitle={card[i].title} key={i} />;
          displayArray.push(card);
        }
      }
    });
  }

  return <div className="deck flex">{displayArray}</div>;

  // if (currentDeck) exists: loop through cards in that deck

  // if (!currentDeck) : loop through decks array in the user store
  // loop through decks array to build out components to render

  // loop through

  // deck = {
  //     id: ___,
  //     title: ___,
  //     cards: []
  // }
};

export default DecksComponent;
