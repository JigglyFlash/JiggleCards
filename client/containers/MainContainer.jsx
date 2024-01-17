import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { syncDeck } from '../reducers/deckReducer.js';
import NavBar from './NavBar.jsx';
import CardsComponent from '../components/CardsComponent.jsx';
import DecksComponent from '../components/DecksComponent.jsx';

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/home')
      .then((response) => response.json())
      .then((data) => {
        dispatch(syncDeck(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main-container">
      <div className="navbar">
        <NavBar />
      </div>
      <div>
        <DecksComponent />
      </div>
      {/* <div className="card-container">
        <CardsComponent />
      </div> */}
    </div>
  );
};

export default MainContainer;
