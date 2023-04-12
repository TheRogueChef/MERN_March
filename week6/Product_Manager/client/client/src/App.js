import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './components/Nav';
import OneProduct from './components/OneProduct';
import UpdateProduct from './components/UpdateProduct';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route element={<Main/>} path="/home" default />
          <Route element={<OneProduct/>} path="/oneProduct/:id" />
          <Route element={<UpdateProduct/>} path="/updateProduct/:id"/>
        </Routes>
    </div>
  );
}

export default App;