import React, { useState } from 'react';
import './CSS/LoginSignup.css';

function LoginSignup() {
  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log('Login Function Executed', formData);
  };

  const signup = async () => {
    console.log('Signup Fucntion Executed', formData);
    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Use JSON.stringify instead of JSON.stringfly
    });
    const { success, errors, token } = await response.json(); // Destructuring assignment

    if (success) {
      localStorage.setItem('auth-token', token);
      window.location.replace('/');
    } else {
      alert(errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === 'Sign Up' ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Adress"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === 'Login' ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === 'Sign Up' ? ( // Corrected typo: 'Sign Up' instead of 'Sigin up'
          <p className="loginsignup-login">
            Already have an account?{' '}
            <span
              onClick={() => {
                setState('Login');
              }}
            >
              Log in here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account ?{' '}
            <span
              onClick={() => {
                setState('Sign Up');
              }}
            >
              Click here
            </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
