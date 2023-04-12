import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayAllProducts = (props) => {
    const navigate = useNavigate()
    const {id} = useParams();
    const {removeFromDom, product, setProduct} = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/allProducts/' + productId)
        .then(res => {
            removeFromDom(productId)
            navigate('/home')
        })
        .catch(err => console.log(err))
    };

    

    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (
        <div className='p-3 mb-2 bg-info text-white'>
            {
                product.map((product, index) => {
                    return (
                        <div className='m-5 border border-dark rounded h-75 d-inline-block p-3 mb-2 bg-primary text-white w-25 p-3' key={index}>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <Link className='btn btn-success' to={`/oneProduct/${product._id}`}>{product.title} Details Page
                            </Link>
                            <br/><br/>
                            <Link className='btn btn-success' to={`/updateProduct/${product._id}`}>{product.title} Edit page</Link>
                            <br/><br/>
                            <button onClick={(e)=>{deleteProduct(product._id)}} className='btn btn-danger'>Delete</button>
                        </div>
                    )})  
            }
        </div>
    );
}
export default DisplayAllProducts;