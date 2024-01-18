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
      console.log('action.payload in syncUser:', action.payload);
      // action.payload to pull the user's data from the database (assume name and decks properties)
      const { username, decks, userId } = action.payload;
      // create copy of decks array just in case
      const decksCopy = [...state.decks];
      // add passed in decks to the copy
      decksCopy.concat(decks);

      // set new properties to state
      state.username = username;
      state.decks = decksCopy;
      state.userId = userId;
    },
    addDeck: (state, action) => {
      const newDeck = action.payload;
      const decksCopy = [...state.decks];
      decksCopy.push(newDeck);

      // set new properties to state
      state.decks = decksCopy;
    },
    setActiveDeck: (state, action) => {
      // action.payload will be the title of the deck selected
      const title = action.payload;
      state.activeDeck = title;
    },
  },
});
export const { syncUser, addDeck, setActiveDeck } = userSlice.actions;
export default userSlice.reducer;
