import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { syncUser } from '../reducers/userReducer';

const signUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const data = {};
    data.username = document.getElementById('username').value;
    data.password = document.getElementById('password').value;

    // fetch request to back end to store user data in database
    // boilerplate borrowed from other project - will need to modify to match back end
    //console.log(JSON.stringify(data));
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response;
    console.log(result);

    // once response comes from back with a successful login, invoke the syncUser to get user data
    // stored into state. DATA FORMAT WILL MATTER (need to link the reducer method to actual form of response)

    dispatch(syncUser(data)); // may need to deconstruct result before dispatching it to the store

    // if result from backend is good (200) then navigate to display page
    // if request fails to add user to database, do something else?
    // if (result === 'you good homie') return navigate('/display');
    // if (result === 'it no work') return navigate('/');
    return navigate('/display');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-700">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl text-white mb-6 text-center">Sign Up</h1>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              id="signup-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUpPage;
