import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h2>{ props.lastName }, { props.firstName }</h2>
            <p>{ props.age }</p>
            <p>{ props.hairColor }</p>
        </div>
    )
}

export default Person;