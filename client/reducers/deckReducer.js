import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  decks: [], // initialized to an empty array --> to be filled with deck objects later
};

const currDeckSlice = createSlice({
  name: 'currDeck',
  initialState,
  reducers: {
    syncDeck: (state, action) => {
      state.decks = action.payload.decks;
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
