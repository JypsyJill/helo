import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import routes from './routes';
function App() {
  return (
    <div className="Nav"> 
      <Nav/>
      {routes}
    </div>
  );
}

export default App;