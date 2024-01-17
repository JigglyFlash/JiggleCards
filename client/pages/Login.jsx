import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { syncUser } from '../reducers/userReducer';

const loginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {};
    data.username = document.getElementById('username').value;
    data.password = document.getElementById('password').value;

    // fetch request to back end for user info verification
    // boilerplate borrowed from other project - will need to modify to match back end
    const response = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    // once response comes from back with a successful login, invoke the syncUser to get user data
    // stored into state. DATA FORMAT WILL MATTER (need to link the reducer method to actual form of response)

    dispatch(syncUser(result)); // may need to deconstruct result before dispatching it to the store

    // if login attempt is unsuccessful, route to /signup page
    // if successful, route to main /display page
    if (result === 'username not found') return navigate('/signup');
    if (result === 'ok') return navigate('/display');
  };

  return (
    <div className='loginPage'>
      <div className='flex bg-green-700'>
        <h1>{'Login'}</h1>
        <label>
          Username:
          <input type='text' id='username' placeholder='Username' />
        </label>
        <label>
          Password:
          <input type='password' id='password' placeholder='Password' />
        </label>
        <button
          className='bg-blue-500 text-green  px-4 py-2 rounded'
          id='login-button'
          onClick={handleSubmit}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default loginPage;
