import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeckModal from '../components/DeckModal.jsx';
import CardModal from '../components/CardModal.jsx';

const NavBar = () => {
  const activeDeck = useSelector((store) => store.user.activeDeck);
  const username = useSelector((store) => store.user.username);

  const [deckModalIsOpen, changeDeckModal] = useState(false);
  const [cardModalIsOpen, changeCardModal] = useState(false);
  // usestate boolean to determine if modal is open or closed
  // create modal component

  const openDeckModal = () => {
    changeDeckModal(!deckModalIsOpen);
  };

  const openCardModal = () => {
    changeCardModal(!cardModalIsOpen);
  };

  return (
    <>
      <div className="navbar flex justify-around items-center bg-blue-500 text-white py-4 shadow-md">
        <div className="nav-left">
          <button
            className="add-deck-button bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={openDeckModal}
          >
            ADD DECK
          </button>
        </div>
        <div className="nav-mid">
          <div className="current-deck font-semibold">Current Deck: {activeDeck}</div>
        </div>
        <div className="nav-right">
          <div className="username font-semibold">Hello, {username}</div>
        </div>

        {deckModalIsOpen ? <DeckModal openDeckModal={openDeckModal} /> : null}
      </div>
      <div>{activeDeck ? <CardModal openCardModal={openCardModal} /> : null}</div>
    </>
  );
};

export default NavBar;
