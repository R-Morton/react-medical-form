import React, { useState } from 'react';

export default function MedicalForm(props) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleChangeName (e) {
    setName(e.target.value)
  }

  function handleChangeEmail (e) {
    setEmail(e.target.value)
  }

  const handleNext = (e) => {
    e.preventDefault()
    props.onNext({ name, email })
  }

    return (
      <form onSubmit={handleNext}>
          <label>Name:</label>
          <input type="text" value={props.name} onChange={handleChangeName} />
          <label>Email:</label>
          <input type="text" value={props.email} onChange={handleChangeEmail} />
          <button type="submit">Next</button>
      </form>
    )
}
