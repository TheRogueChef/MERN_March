import React from 'react';

const UserDisplay = (props) => {
const { userBoxArray } = props;


return (
    <div>
    {
        userBoxArray.map((box, index) => (
        <div key={index} style={{ 
            display: "inline-block",
            margin: "10px",
            height: box.size, 
            width: box.size, 
            backgroundColor: box.color
            }}>
        </div>
        ))
    }
    </div>
);
}

export default UserDisplay;