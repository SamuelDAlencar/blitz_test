import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SignIn.css';

export default function SignIn() {
  const [newUser, setNewUser] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [passVisibility, setPassVisibility] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  const inputHandler = ({ target: { id, value } }) => {
    setNewUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const SignIn = async () => {
    const { username, email, password } = newUser;

    const request = await fetch('http://localhost:3001/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });

    if (request.status === 409) {
      setUserExists(!userExists);
      setTimeout(() =>
        setUserExists(false), 5000);
    } else {
      navigate('/home');
    }
  };

  return (
    <main className='signIn-main'>
      <h1 className='signIn-h1'>
        Sign-In
      </h1>
      <section className="signIn-input-section">
        <TextField
          id="email"
          label="Email"
          placeholder="yourEmail@hotmail.com"
          data-testid="email-input"
          onChange={inputHandler}
          className='signIn-input'
        />
      </section>
      <section className="signIn-input-section">
        <TextField
          label="Username"
          id="username"
          data-testid="username-input"
          onChange={inputHandler}
          className='signIn-input'
        />
      </section>
      <section className="signIn-input-section">
        <TextField
          label="password"
          id="password"
          data-testid="password-input"
          type={
            passVisibility
              ? 'text'
              : 'password'
          }
          onChange={inputHandler}
          className='signIn-input'
        />
        <input
          type="checkbox"
          className="password-visibility"
          onClick={
            () => setPassVisibility(!passVisibility)} />
      </section>
      <Button
        color="primary"
        disableElevation
        onClick={SignIn}
        type="button"
        variant="outlined"
        className='signIn_button'
        disabled={
          !(newUser.email.includes('@')
            && newUser.email.includes('.com')
            && newUser.password.length >= 6)
        }
      >Create account</Button>
      {userExists
        && <p style={{ color: 'red' }}>This user already exists</p>}
    </main>
  );
}