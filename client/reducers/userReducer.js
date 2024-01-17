import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'Guest',
  decks: [],
  activeDeck: '',
  userId: '123',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    syncUser: (state, action) => {
      // action.payload to pull the user's data from the database (assume name and decks properties)
      const { name, decks, userId } = action.payload;
      // create copy of decks array just in case
      const decksCopy = [...state.decks];
      // add passed in decks to the copy
      decksCopy.concat(decks);

      // set new properties to state
      state.username = name;
      state.decks = decksCopy;
      state.userId = userId;
    },
    addDeck: (state, action) => {
      console.log('action.payload from addDeck method: ', action.payload);
      const newDeck = action.payload;
      // const decksCopy = [...state.decks];
      state.decks.push(newDeck);
      console.log('decksCopy in userReducer: ', decksCopy);
      // set new properties to state
      state.decks = decksCopy;
    },
  },
});
export const { syncUser, addDeck } = userSlice.actions;
export default userSlice.reducer;
