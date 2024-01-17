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
    <div className="main-container bg-gray-50 min-h-screen">
      <div className="navbar bg-white shadow-md">
        <NavBar />
      </div>
      <div className="py-8">
        <DecksComponent />
      </div>
      {/* Uncomment the following section if you wish to include the card container */}
      {/* <div className="card-container py-8">
        <CardsComponent />
      </div> */}
    </div>
  );
};

export default MainContainer;
