import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={ <SignUp /> } />
        <Route exact path='/' element={ <Login /> } />
        <Route exact path='home' element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
