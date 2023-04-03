import React, { useState, useEffect } from 'react';
import axios from 'axios'

const DisplayAllProducts = (props) => {
    const {allProducts, setAllProducts} = props
    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
        .then((allProducts) => {
            setAllProducts(allProducts.data)
        })
        .catch((err) => {
            console.log(err);
        })
    })

    return (
        <div>
            <h2>Check out all of our products</h2>
            {
                allProducts.map((product) => (
                <div className=' border border-solid' key={product._id}>
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
                ))
            }  
        </div>
    )
}
export default DisplayAllProducts