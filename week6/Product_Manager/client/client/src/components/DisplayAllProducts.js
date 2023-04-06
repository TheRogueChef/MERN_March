import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const DisplayAllProducts = (props) => {

    const { product, setProduct } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    });


    return (
        <div>
            {
                product.map((product, index) => {
                    return (
                        <div key={index}>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <Link to={`/oneProduct/${product._id}`}>{product.title} Page!
                            </Link>
                        </div>
                    )})  
            }
        </div>
    );
}
export default DisplayAllProducts;