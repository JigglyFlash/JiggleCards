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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl text-gray-800 font-bold mb-10">Welcome to JiggleCards</h1>
        <div className="space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={loginSubmit}
          >
            LOG IN
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={signupSubmit}
          >
            SIGN UP
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={startSubmit}
          >
            CONTINUE AS GUEST
          </button>
        </div>
      </div>
    </div>
  );
};

export default homePage;
