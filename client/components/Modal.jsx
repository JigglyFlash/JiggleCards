import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDeck } from '../reducers/userReducer.js';

const addDeckModal = ({ openModal }) => {
  const userId = useSelector((store) => store.user.userId);
  const dispatch = useDispatch();
  const submitDeck = () => {
    const deck = {};
    deck.title = document.getElementById('deck-title').value;
    deck.userId = userId;
    deck.cards = [];
    console.log('deck constructed by modal: ', deck);

    dispatch(addDeck(deck));
    openModal();
  };

  return (
    <div className="modal">
      <h1>NEW DECK</h1>
      <label>
        <input
          type="text"
          id="deck-title"
          placeholder="Deck title"
          className="text-black"
        />
      </label>
      <button
        className="bg-blue-500 text-green  px-4 py-2 rounded"
        id="add-deck"
        onClick={submitDeck}
      >
        Submit
      </button>
    </div>
  );
};

export default addDeckModal;
