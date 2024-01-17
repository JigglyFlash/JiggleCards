import React from 'react';

const Deck = (props) => {
  const { deckTitle } = props;
  return (
    <div>
      <button>{deckTitle}</button>
    </div>
  );
};

export default Deck;
