import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProductForm = (props) => {
    const navigate = useNavigate()
    const {allProducts, setAllProducts} = props
    const [product, setProduct] = useState({
        title: '',
        price: Number(0),
        description: '',
    })
    
    
    const handleInputChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newProduct', product)
        .then((res) => {
            setAllProducts([...allProducts, res.data])
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <div className='d-flex justify-content-center'>         
                <form className='w-25' onSubmit={submitHandler}>

                    <label className='form-label'>Title: </label>
                    <input className='form-control' type="text" onChange={handleInputChange} value={product.title} name='title'/>

                    <label className='form-label'>Price: </label>
                    <input className='form-control' type="number" onChange={handleInputChange} value={product.price} name='price'/>

                    <label className='form-label'>Description: </label>
                    <input className='form-control' type="text" onChange={handleInputChange} value={product.description} name='description'/>
                <button className='btn btn-primary' >Create</button>
            </form>
        </div>
    )
}

export default ProductForm;