import React, { useState } from 'react';

const Person = (props) => {
    const [ birthDay, setBirthDay ] = useState(props.age);

    return (
        <div>
            <h2>{ props.lastName }, { props.firstName }</h2>
            <p>Age: { props.age, birthDay }</p>
            <p>Hair Color:{ props.hairColor }</p>
            <button onClick={ (event) => setBirthDay(birthDay + 1)}>Birthday button for { props.firstName }</button>
        </div>
    )
}

export default Person;