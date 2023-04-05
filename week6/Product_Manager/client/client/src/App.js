import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route element={<Main/>} path="/home" default />
        </Routes>
    </div>
  );
}

export default App;