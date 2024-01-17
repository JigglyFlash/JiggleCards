import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Deck from './Deck.jsx';

const DecksComponent = () => {
  // pull the decks from the user store --> do we even need a deckReducer??
  const decks = useSelector((store) => store.user.decks); // if guest, will return empty array
  console.log('decks coming from store: ', decks);

  const displayArray = [];
  if (decks[0] != undefined) {
    for (let i = 0; i < decks.length; i++) {
      const deck = <Deck deckTitle={decks[i].title} />;
      displayArray.push(deck);
    }
  }
  const [modalIsOpen, changeModal] = useState(false);
  const openModal = () => {
    changeModal(!modalIsOpen);
  };

  return <div className="deck">{displayArray}</div>;

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
