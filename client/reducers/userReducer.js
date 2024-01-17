import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'Guest',
  decks: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    syncUser: (state, action) => {
      // action.payload to pull the user's data from the database (assume name and decks properties)
      const { name, decks } = action.payload;
      // create copy of decks array just in case
      const decksCopy = [...state.decks];
      // add passed in decks to the copy
      decksCopy.concat(decks);

      // set new properties to state
      state.username = name;
      state.decks = decksCopy;
    },
  },
});
