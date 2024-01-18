import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveDeck } from '../reducers/userReducer';

const Deck = (props) => {
  const dispatch = useDispatch();

  const deckClick = (event) => {
    console.log('===== event =====>', event);
    const deckTitle = event.target.innerHTML;
    console.log('==== deckTitle ====>', deckTitle);
    dispatch(setActiveDeck(deckTitle));
  };

  const { deckTitle } = props;
  return (
    <div>
      <button
        onClick={deckClick}
        className="bg-blue-500 hover:bg-blue-700 w-80 h-80 m-4 shadow-md text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-lg"
      >
        {deckTitle}
      </button>
    </div>
  );
};

export default Deck;
