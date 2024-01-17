import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  decks: [], // initialized to an empty array --> to be filled with deck objects later
  name: '',
  id: '',
};

const currDeckSlice = createSlice({
  name: 'currDeck',
  initialState,
  reducer: {
    syncDeck: (state, action) => {
      state.decks = action.payload.decks;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
  },
});

// deck = {
//     id: ___,
//     title: ___,
//     cards: []
// }

export const { syncDeck } = currDeckSlice.actions;
export default currDeckSlice.reducer;
