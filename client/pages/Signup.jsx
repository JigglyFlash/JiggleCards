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

    // if result from backend is good (200) then navigate to display page
    // if request fails to add user to database, do something else?
    if (result === 'you good homie') return navigate('/display');
    if (result === 'it no work') return navigate('/');
  };

  return (
    <div className='signupPage'>
      <div className='Signup'>
        <h1>{'Sign Up'}</h1>
        <label>
          Username:
          <input type='text' id='username' placeholder='Username' />
        </label>
        <label>
          Password:
          <input type='password' id='password' placeholder='Password' />
        </label>
        <button className='button' id='signup-button' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default signUpPage;
