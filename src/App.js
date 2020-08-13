import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './ui/NavBar';
import Home from './container/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import Realeases from './container/Releases';
import Backlog from './container/Backlog';
import Sprints from './container/Sprints';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/releases' component={Realeases}/>
        <Route exact path='/backlog' component={Backlog}/>
        <Route exact path='/sprints' component={Sprints}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
