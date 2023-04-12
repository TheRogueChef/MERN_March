import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className='d-flex justify-content-evenly align-items-center mb-5 p-3 border-bottom'>
            <h1>Product Manager</h1>
            <Link to={'/home'}>Home</Link>
        </div>
    )
}

export default Nav;