import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal.jsx';

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
    <div className="navbar flex justify-around items-center">
      <div className="nav-left">
        <button className="add-deck-button" onClick={openModal}>
          ADD DECK
        </button>
      </div>
      <div className="nav-mid">
        <div className="current-deck">Current Deck: {activeDeck.title}</div>
      </div>
      <div className="nav-right">
        <div className="username">Hello, {username}</div>
      </div>

      {modalIsOpen ? <Modal openModal={openModal} /> : null}
    </div>
  );
};

export default NavBar;
