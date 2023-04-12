import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const OneProduct = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState({})
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/oneProduct/"+id)
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {  
                console.log(err);
            })
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/allProducts/' + productId)
        .then(res => {
            navigate('/home')
        })
        .catch(err => console.log(err))
    };


    return (
        <div>
            <h2>Title: {product.title}</h2>
            <h3>Price: {product.price}</h3>
            <p>Description: {product.description}</p>
            <button onClick={(e)=>{deleteProduct(product._id)}} className='btn btn-danger'>Delete</button>
        </div>
    )}

export default OneProduct;