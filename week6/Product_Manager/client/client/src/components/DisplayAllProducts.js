import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


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
        <div>
            {
                product.map((product, index) => {
                    return (
                        <div key={index}>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <Link to={`/oneProduct/${product._id}`}>{product.title} Details Page
                            </Link>
                            <br/>
                            <Link to={`/updateProduct/${product._id}`}>{product.title} Edit page</Link>
                            <br/>
                            <button onClick={(e)=>{deleteProduct(product._id)}} className='btn btn-danger'>Delete</button>
                            <hr/>
                        </div>
                    )})  
            }
        </div>
    );
}
export default DisplayAllProducts;