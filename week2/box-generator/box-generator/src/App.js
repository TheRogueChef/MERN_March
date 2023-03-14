import './App.css';
import React, { useState } from 'react';
import Form from './components/BoxForm';
import Display from './components/BoxDisplay';
import UserForm from './components/UserForm';
import UserDisplay from './components/UserDisplay';

function App() {
  const [ boxColorArray, setBoxColorArray ] = useState([]);
  const [ userBoxArray, setUserBoxArray ] = useState([])

  return (
    <div className="App">
      <h1>Just Boxes</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
      <hr />
      <h1>Ninja Bonus</h1>
      <UserForm userBoxArray={ userBoxArray } setUserBoxArray={ setUserBoxArray } />
      <UserDisplay userBoxArray={ userBoxArray } />
      
    </div>
  );
}

export default App;