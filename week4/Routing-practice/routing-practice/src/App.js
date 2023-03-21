import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Number from './components/Number';
import Word from './components/Word';
import ColorWord from './components/ColorWord';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Word/:word" element={<Word />} />
          <Route path="/Number/:number" element={<Number />} />
          <Route path="/ColorWord/:word/:color/:background" element={<ColorWord />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
