import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/App.css';

function App() {
  return (
    <body className="app_body">
      <Header />
      <main>
        <h1>(body)</h1>
      </main>
      <Footer />
    </body>
  );
}

export default App;
