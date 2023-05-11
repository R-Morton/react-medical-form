import React, { useState } from 'react';
import MedicalForm from './MedicalForm';
import MedicalDisplay from './MedicalDisplay';



export default function MedicalParent() {

    const [formData, setFormData] = useState("")
    const [showForm, setShowForm] = useState(false)

    const handleSubmit = (data) => {
        setFormData(data);
        setShowForm(true)
    }


    return (
        <div>
            <h1>Form</h1>
            <MedicalForm onSubmit={handleSubmit}></MedicalForm>
            {showForm && <MedicalDisplay name={formData.name} email={formData.email} age={formData.age} gender={formData.gender} />}
            
        </div>
    )

}