import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/oneProduct/'+ id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err=> console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateProduct/'+ id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate('/home');
            })
            .catch(err => console.log(err))
    }
    return(
        <div className='m-5 border border-dark rounded w-50 h-100 d-inline-block p-3 mb-2 bg-primary text-white w-25'>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type='text'
                    name='title'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                <label>Price</label><br />
                    <input type='number'
                    name='price'
                    value={price}
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                <label>Description</label><br />
                    <input type='text'
                    name='description'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }} /> 
                </p>
                <input className='btn btn-success' type='submit'/>
            </form>
        </div>
    )

}

export default Update;



























// const UpdateProduct = (props) => {
//     const navigate = useNavigate()
//     const {id} = useParams();
//     const {allProducts, setAllProducts} = props
//     const [product, setProduct] = useState({})

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/updateProduct/"+id, product)
//             .then((res) => {
//                 console.log(res.data);
//                 setProduct(res.data);
//                 navigate('/home')
//             })
//             .catch((err) => {  
//                 console.log(err);
//             })
//     }, []) 
    
    
//     const handleInputChange = (e) => {
//         console.log(e.target.name);
//         console.log(e.target.value);
//         setProduct({...product, [e.target.name]: e.target.value})
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8000/api/updateProduct/'+id, product)
//         .then((res) => {
//             setAllProducts([...allProducts, res.data])
//             navigate('/home')
//         })
//         .catch((err) => {
//             console.log(err.response.data.errors)
//         })
//     }


//     return (
//         <div className='d-flex justify-content-center'>       
//                 <form className='w-25' onSubmit={submitHandler}>
//                     <h3>Update {product.title}</h3>
//                     <label className='form-label'>Title:  </label>
//                     <input className='form-control' type="text{product.title}" onChange={handleInputChange} value={product.title} name='title'/>

//                     <label className='form-label'>Price: </label>
//                     <input className='form-control' type="number" onChange={handleInputChange} value={product.price} name='price'/>

//                     <label className='form-label'>Description: </label>
//                     <input className='form-control' type="text" onChange={handleInputChange} value={product.description} name='description'/>
//                 <button className='btn btn-primary' >Update</button>
//             </form>
//         </div>
//     )
// }

// export default UpdateProduct;