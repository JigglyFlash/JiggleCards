import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeckModal from '../components/DeckModal.jsx';

const NavBar = () => {
  const activeDeck = useSelector((store) => store.user.activeDeck);
  const username = useSelector((store) => store.user.username);

  const [modalIsOpen, changeModal] = useState(false);
  // usestate boolean to determine if modal is open or closed
  // create modal component

  const openModal = () => {
    changeModal(!modalIsOpen);
  };

  return (
    <div className="navbar flex justify-around items-center bg-blue-500 text-white py-4 shadow-md">
      <div className="nav-left">
        <button
          className="add-deck-button bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          onClick={openModal}
        >
          ADD DECK
        </button>
      </div>
      <div className="nav-mid">
        <div className="current-deck font-semibold">Current Deck: {activeDeck.title}</div>
      </div>
      <div className="nav-right">
        <div className="username font-semibold">Hello, {username}</div>
      </div>

      {modalIsOpen ? <DeckModal openModal={openModal} /> : null}
    </div>
  );
};

export default NavBar;
