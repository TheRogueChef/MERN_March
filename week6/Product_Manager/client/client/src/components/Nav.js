import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className='p-3 mb-2 bg-primary text-white d-flex justify-content-evenly align-items-center mb-5 p-3 border-bottom'>
            <h1 className='text-dark'>Product Manager</h1>
            <Link className='btn btn-success' to={'/home'}>Home</Link>
        </div>
    )
}

export default Nav;