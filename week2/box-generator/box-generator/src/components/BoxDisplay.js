import React from 'react';

const Display = (props) => {
const { boxColorArray } = props;

return (
    <div>
    {
        boxColorArray.map((color, index) => (
        <div key={index} style={{ 
            display: "inline-block",
            margin: "10px",
            height: "100px", 
            width: "100px", 
            backgroundColor: color
            }}>
        </div>
        ))
    }
    </div>
);
}

export default Display;