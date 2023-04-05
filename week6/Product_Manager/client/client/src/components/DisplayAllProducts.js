import axios from 'axios';
import React,{ useState, useEffect } from 'react'

const DisplayAllProducts = (props) => {

    const { product, setProduct } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })


    return (
        <div>
            {
                product.map((product, index) => {
                return <p key={index}>{product.title}, {product.price}, {product.description}</p>
                })
            }
        </div>
    )
}
export default DisplayAllProducts