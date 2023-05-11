import React, { useState } from 'react';
import MedicalForm from './MedicalForm';
import MedicalDisplay from './MedicalDisplay';
import MedicalForm2 from './MedicalForm2';



export default function MedicalParent() {

    const [formData0, setFormData0] = useState("")
    const [formData1, setFormData1] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleSubmit = (data) => {
        setFormData1(data);
        if (currentIndex === 1) {
            setShowForm(true)
        }
    }

    const handleNext = (data) => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        if (currentIndex === 0) {
            setFormData0(data);
        }
      };
    
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) => prevIndex -1)
      }

    return (
        <div>
            <h1>Form</h1>
            {currentIndex === 0 && <MedicalForm onNext={handleNext} />}
            {currentIndex === 1 && <MedicalForm2 onSubmit={handleSubmit} />}
            {showForm && <MedicalDisplay name={formData0.name} email={formData0.email} age={formData1.age} gender={formData1.gender} />}
            
        </div>
    )

}