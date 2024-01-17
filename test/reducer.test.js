const currDeckSlice = require('../client/reducers/deckReducer');
console.log(currDeckSlice);

describe('running currDeckSlice test', () => {
  it('syncDeck should........', () => {
    expect('test').toEqual('test');
    expect(typeof currDeckSlice).toEqual('object');
  });
});
