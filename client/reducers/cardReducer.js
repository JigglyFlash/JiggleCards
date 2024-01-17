import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    syncCards: (state, action) => {
      // access the database and pull card data for the current deck
      // set it up such that the action.payload is the full array of cards for current deck
      const { cards } = action.payload;
      // create copy of cards array to mutate
      const cardCopy = [...state.cards];

      // set the state.cards to be the cards from the payload
      state.cards = cards;
    },
    addCard: (state, action) => {
      // action.payload to get data for new card
      const { front, back, title, deck } = action.payload;
      // construct new card object with the passed in data
      const newCard = { front: front, back: back, title: title, deckId: deck };
      // create copy of cards array to mutate
      const cardCopy = [...state.cards];
      // push that card object into state.cards
      cardCopy.push(newCard);

      // set the newly mutated cardCopy array to be the state.cards array
      state.cards = cardCopy;
    },
    deleteCard: (state, action) => {
      // action.payload to get data for card (use title and deckId)
      const { title, deckId } = action.payload;
      // make copy of our cards array?
      const cardCopy = [...state.cards];
      // filter our state.cards to remove the targeted card
      cardCopy.filter((card) => card.title !== title && card.deckId !== deckId);

      // set the newly mutated cardCopy array to be the state.cards array
      state.cards = cardCopy;
    },
  },
});
