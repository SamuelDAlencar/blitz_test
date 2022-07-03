import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import '../style/Login.css';

// This Login page and its style was taken from a personal project (available on my GitHub as "koala_project");

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    userName: '',
    password: '',
  });
  const [passVisibility, setPassVisibility] = useState(false);
  const [invalidFields, setInvalidFields] = useState(false);

  const inputHandler = ({ target: { id, value } }) => {
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const logButton = async () => {
    const { email, password } = user;
    const request = await fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (request.status === 200) {
      navigate('/home');
    } else if (request.status === 400) {
      setInvalidFields(true);
      setTimeout(() =>
        setInvalidFields(false), 5000);
    }
  };

  return (
    <main className="logIn-main">
      <h2
        className="logIn-h1"
      >Log-In</h2>
      <section
        className='logIn-input-section'
      >
        <TextField
          label="Email"
          autoComplete="off"
          placeholder="yourEmail@hotmail.com"
          type="email"
          className='logIn-input'
          id="email"
          data-testid="email-input"
          onChange={inputHandler}
        />
      </section>
      <section
        className='logIn-input-section'
      >
        <TextField
          label="password"
          className='logIn-input'
          id="password"
          data-testid="password-input"
          type={
            passVisibility
              ? 'text'
              : 'password'
          }
          onChange={inputHandler}
        />
        <input
          type="checkbox"
          className="password-visibility"
          onClick={
            () => setPassVisibility((prevState) => !prevState)} />
      </section>
      {invalidFields
        && <p style={{ color: 'red' }}>
          Invalid fields
        </p>}
      <Button
        size="large"
        color="primary"
        variant="contained"
        onClick={ logButton }
        type="button"
        className='logIn_button'
        disabled={
          !(user.email.includes('@')
            && user.email.includes('.com')
            && user.password.length >= 8)
        }
      >Log In</Button>
      <Button
        size="large"
        onClick={() => navigate('/')}
        className='logIn_button'
        color="primary"
        variant="outlined"
      >
        Create account
      </Button>
    </main>
  );
}

export default Login;
