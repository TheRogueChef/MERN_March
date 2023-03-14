import React, { useState } from 'react';

const UserForm = (props) => {
const { userBoxArray, setUserBoxArray } = props;
const [ color, setColor] = useState("");
const [ size, setSize] = useState(100);
const submitHandler = (event) => {
    event.preventDefault();

    setUserBoxArray( [ 
    ...userBoxArray, 
    { 
        color: color,
        size: size + "px",
    }
    ] );
    setColor("");
    setSize(100);
}

return (
    <div>
    <form onSubmit={ submitHandler } style={{ margin: "20px" }}>
        <div>
        <label>Color: </label>
        <input 
            type="text" 
            name="color"
            value={color}
            onChange={ (e) => setColor(e.target.value) }
        />
        </div>
        <div>
        <label>Size: </label>
        <input 
            type="text" 
            name="size"
            value={size}
            onChange={ (e) => setSize(e.target.value) }
        />
        </div>
        <button>Add</button>
    </form>

</div>
)
}

export default UserForm;