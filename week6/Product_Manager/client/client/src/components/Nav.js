import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className='d-flex justify-content-evenly align-items-center'>
            <h1>Product Manager</h1>
            <Link to={'/newProduct/form'}>Create a new Product</Link>
            <Link to={'/home'}>Home</Link>
        </div>
    )
}

export default Nav;