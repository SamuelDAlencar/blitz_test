import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Routes>
          {/* <Route exact path='/signup' element={ <SignUp /> } /> */}
          {/* <Route exact path='/' element={ <Login /> } /> */}
          <Route exact path='home' element={ <Home /> } />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
