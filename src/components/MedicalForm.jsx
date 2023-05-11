import React, { useState } from 'react';

export default function MedicalForm(props) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleChangeName (e) {
    setName(e.target.value)
  }

  function handleChangeEmail (e) {
    setEmail(e.target.value)
  }

  function handleChangeAge (e) {
    setAge(e.target.value)
  }

  function handleChangeGender (e) {
    setGender(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit({ name, email, age, gender })
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex -1)
  }

  function form1() {
    return(
    <form>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleChangeName} />
      <label>Email:</label>
      <input type="text" value={email} onChange={handleChangeEmail} />
      <button type="button" onClick={handleNext}>Next</button>
    </form>
    )
  }

  function form2() {
    return (
    <form onSubmit={handleSubmit}>
      <label>Age:</label>
      <input type="text" value={age} onChange={handleChangeAge} />
      <label>Gender:</label>
      <input type="text" value={gender} onChange={handleChangeGender} />
      <button type="button" onClick={handlePrevious}>Previous</button>
      <button type="submit">Submit</button>
    </form>
    )
  }

    return (
      <div>
        {currentIndex === 0 && form1()}
        {currentIndex === 1 && form2()}
      </div>

    )
}
