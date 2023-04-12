import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import DisplayAllProducts from '../components/DisplayAllProducts';



const Main = (props) => {

    const [product, setProduct] = useState([]);
    const removeFromDom = productId => {
        setProduct(product.filter(product=>product._id !== productId));
    }
    return (
        <div>
            <ProductForm product={product} setProduct={setProduct} />
            <hr />
            <DisplayAllProducts product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;
