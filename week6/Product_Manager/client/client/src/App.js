import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './components/Nav';
import OneProduct from './components/OneProduct';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route element={<Main/>} path="/" default />
          <Route element={<OneProduct/>} path="/oneProduct/:id" />
        </Routes>
    </div>
  );
}

export default App;