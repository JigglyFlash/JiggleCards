import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDeck, addCard } from '../reducers/userReducer.js';

const addCardModal = ({ openCardModal }) => {
  const dispatch = useDispatch();
  const submitCard = () => {
    const card = {};
    card.title = document.getElementById('card-title').value;
    // card.userId = userId;
    card.cards = [];

    dispatch();
    openCardModal();
  };

  return (
    <div className="modal">
      <h1>NEW CARD</h1>
      <label>
        <input
          type="text"
          id="card-title"
          placeholder="Card title"
          className="text-black"
        />
      </label>
      <button
        className="bg-blue-500 text-green  px-4 py-2 rounded"
        id="add-card"
        onClick={submitCard}
      >
        Submit
      </button>
    </div>
  );
};

export default addCardModal;
