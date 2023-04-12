import React, { useState } from 'react';
import axios from 'axios';

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
        <div className='d-flex justify-content-center'>
            <form className='w-25' onSubmit={submitHandler}>
                <h3>Create a New Product</h3>
                <label className='form-label'>Title: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={product.title} name='title' />

                <label className='form-label'>Price: </label>
                <input className='form-control' type="number" onChange={handleInputChange} value={product.price} name='price' />

                <label className='form-label'>Description: </label>
                <input className='form-control' type="text" onChange={handleInputChange} value={product.description} name='description' />
                <button className='btn btn-primary' >Create</button>
            </form>
        </div>
    )
}

export default ProductForm;