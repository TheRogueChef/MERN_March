import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';


function App() {

useEffect(() =>{
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((result) => {console.log(result)
      console.log(result.data.results)
      setState(result.data.results)})
      .catch((err) => {console.log(err)})
},[])


  const [state, setState] = useState([])

  return (
    <div className="App">
      {
      state.map((pokemon) => (
        <h1>{pokemon.name}</h1>))
      }
    </div>
  );
}


export default App;
