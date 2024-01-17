import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Login from './pages/Login.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<MainContainer />} />
    </Routes>
  );
};

// npm imports
// import React from "react";
// import { useEffect, useState } from "react";
// import CreatePage from "./components/CreatePage.jsx";
// import { Route, Routes } from "react-router-dom";

// file imports
// import PetPage from "./components/PetPage.jsx";
// import LoginPage from "./components/LoginPage.jsx";
// import SignupPage from "./components/SignupPage.jsx";
// import HomePage from "./components/HomePage.jsx";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/signup" element={<SignupPage />} />
//       <Route path="/homepage" element={<HomePage />} />
//       <Route path="/" element={<LoginPage />} />
//     </Routes>
//   );
// };

// export default App;
