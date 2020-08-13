import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './ui/NavBar';
import Home from './container/Home';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
