import React, { useState } from 'react';
import MedicalForm from './MedicalForm';
import MedicalDisplay from './MedicalDisplay';
import MedicalForm2 from './MedicalForm2';



export default function MedicalParent() {

    const [formData, setFormData] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleSubmit = (data) => {
        setFormData(data)
        if (currentIndex === 1) {
            setShowForm(true)
        }
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      };
    
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) => prevIndex -1)
      }

    return (
        <div>
            <h1>Form</h1>
            {currentIndex === 0 && <MedicalForm onNext={handleNext} onSubmit={handleSubmit} />}
            {currentIndex === 1 && <MedicalForm2 onSubmit={handleSubmit} />}
            {showForm && <MedicalDisplay name={formData.name} email={formData.email} age={formData.age} gender={formData.gender} />}
            
        </div>
    )

}