import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductForm = (props) => {
    const [product, setProduct] = useState({
        title: '',
        price: Number(0),
        description: ''
    });


    const handleInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newProduct', product)
            .then((res) => {
                setProduct({title:"", price:0, description:""})
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div className='p-3 mb-2 bg-info text-white d-flex justify-content-center'>
        <div className='m-5 border border-dark rounded h-75 d-inline-block p-3 mb-2 bg-primary text-white w-25 d-flex justify-content-center'>
            <form className='w-25' onSubmit={submitHandler}>
                <h3>Create a New Product</h3>
                <label className='form-label'>Title: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={product.title} name='title' />

                <label className='form-label'>Price: </label>
                <input className='form-control' type="number" onChange={handleInputChange} value={product.price} name='price' />

                <label className='form-label'>Description: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={product.description} name='description' />
                <br/>
                <button className='btn btn-success' >Create</button>
            </form>
        </div>
        </div>
    )
}

export default ProductForm;