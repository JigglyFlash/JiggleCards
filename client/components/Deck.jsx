import React from 'react';

const Deck = (props) => {
  const { deckTitle } = props;
  return (
    <div>
      <button onClick={} "bg-blue-500 hover:bg-blue-700 w-80 h-80 m-4 shadow-md text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-lg">
        {deckTitle}
      </button>
    </div>
  );
};

export default Deck;
