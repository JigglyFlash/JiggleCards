import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import { Route, Routes } from 'react-router-dom';
import './styles.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="display" element={<MainContainer />} />
    </Routes>
  );
};
export default App;
