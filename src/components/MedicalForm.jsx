import React, { useState } from 'react';

export default function MedicalForm(props) {


  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
  });

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(formValues)
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
      <input type="text" name="name" value={formValues.name} onChange={handleChange} />
      <label>Email:</label>
      <input type="text" name="email" value={formValues.email} onChange={handleChange} />
      <button type="button" onClick={handleNext}>Next</button>
    </form>
    )
  }

  function form2() {
    return (
    <form onSubmit={handleSubmit}>
      <label>Age:</label>
      <input type="text" name='age' value={formValues.age} onChange={handleChange} />
      <label>Gender:</label>
      <input type="text" name='gender' value={formValues.gender} onChange={handleChange} />
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
