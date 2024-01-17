import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const homePage = () => {
  const navigate = useNavigate();

  const loginSubmit = () => {
    return navigate('/login');
  };

  const startSubmit = () => {
    return navigate('/display');
  };

  const signupSubmit = () => {
    return navigate('/signup');
  };

  return (
    <div className="homePage">
      <div className="buttons justify-around flex">
        <button className="login" onClick={loginSubmit}>
          LOG IN
        </button>
        <button className="signup" onClick={signupSubmit}>
          SIGN UP
        </button>
        <button className="start" onClick={startSubmit}>
          CONTINUE AS GUEST
        </button>
      </div>
    </div>
  );
};

export default homePage;
