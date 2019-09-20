import React from "react";
import "./Person.css"

const person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.click}>My name is {props.name}</h1>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p>I am {props.age} years old</p>
            <p>I am a {props.job}</p>
            <p>My salary is ${Math.floor(Math.random() * 100000) + 50000}</p>
            <p>My hobbies are: {props.children}</p>
        </div>
    )
}

export default person;