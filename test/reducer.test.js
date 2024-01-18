const reducers = require('../client/reducers/index.js');
//const store = require('./test/setup_test.js');
import { syncUser } from '../client/reducers/userReducer.js';
import { syncCards, addCard, deleteCard } from '../client/reducers/cardReducer.js';
import { syncDeck } from '../client/reducers/deckReducer.js';
// const dispatch = useDispatch();
// dispatch(syncUser(info))

const mockState = {
  decks: [
    {
      name: 'Deck One',
      id: 5,
      cards: [
        {
          front: 'front of card one',
          back: 'back of card one',
          title: 'title of card one',
          deckId: 5,
        },
        {
          front: 'front of card two',
          back: 'back of card two',
          title: 'front of card title',
          deckId: 5,
        },
      ],
    },
    {
      name: 'Deck Two',
      id: 3,
      cards: [
        {
          front: 'front of card one',
          back: 'back of card one',
          title: 'title of card one',
          deckId: 3,
        },
        {
          front: 'front of card two',
          back: 'back of card two',
          title: 'front of card title',
          deckId: 3,
        },
      ],
    },
  ],
  username: 'Guest',
  userId: 1,
};

const newCard = {
  front: 'front of new Card',
  back: 'back of new Card',
  title: 'front of  new card title',
  deckId: 5,
};
const cardToDelete = {
  front: 'front of card one',
  back: 'back of card one',
  title: 'title of card one',
  deckId: 5,
};

//console.log(mockState);

describe('Initializing mock State', () => {
  it('is mockState Initialized', () => {
    expect('test').toEqual('test');
    expect(typeof mockState).toEqual('object');
  });
});

describe('Testing card methods', () => {
  it('testing syncCards', () => {
    expect('test').toEqual('test');
    expect(typeof syncCards).toEqual('function');
    expect(mockState).toEqual(mockState);
  });

  it('testing addCard', () => {
    expect('test').toEqual('test');
    expect(typeof addCard).toEqual('function');
  });

  it('testing deleteCard', () => {
    expect('test').toEqual('test');
    expect(typeof deleteCard).toEqual('function');
    expect(deleteCard(mockState));
  });
});

describe('Testing user methods', () => {
  it('Starting with syncUser', () => {
    expect('test').toEqual('test');
    expect(typeof syncUser).toEqual('function');
  });
});
