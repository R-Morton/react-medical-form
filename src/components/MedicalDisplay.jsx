import React from "react"

export default function MedicalDisplay(props) {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Age: {props.age}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}