import './App.css';

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import ProductForm from './components/ProductForm';
import DisplayAllProducts from './components/DisplayAllProducts'
import Nav from './components/Nav';

function App() {
  const [allProducts, setAllProducts] = useState([])
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<DisplayAllProducts allProducts={allProducts} setAllProducts={setAllProducts}/>}/>
        <Route path='/newProduct/form' element={<ProductForm allProducts={allProducts} setAllProducts={setAllProducts}/>}/>
      </Routes>
    </div>
  );
}

export default App;
