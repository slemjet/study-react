import React from "react";

const person = (props) => {
    return (
        <div class="person">
            <h1>My name is {props.name}</h1>
            <p>I am {props.age} years old</p>
            <p>I am a {props.job}</p>
            <p>My salary is ${Math.floor(Math.random() * 100000) + 50000}</p>
        </div>
    )
}

export default person;