import React, { useState } from 'react';

export default function MedicalForm2(props) {

  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  function handleChangeAge (e) {
    setAge(e.target.value)
  }

  function handleChangeGender (e) {
    setGender(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit({ age, gender })
  }

    return (
      <form onSubmit={handleSubmit}>
          <label>Age:</label>
          <input type="text" value={props.age} onChange={handleChangeAge} />
          <label>Gender:</label>
          <input type="text" value={props.gender} onChange={handleChangeGender} />
          <button type="submit">Submit</button>
      </form>
    )
}