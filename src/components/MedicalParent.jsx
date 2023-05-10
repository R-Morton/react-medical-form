import MedicalForm from "./MedicalForm"


export default function MedicalParent(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [submittedName, setSubmittedName] = useState("")
    const [submittedEmail, setSubmittedEmail] = useState("")

    function handleSubmitForm (event) {
        event.preventDefault()
        setSubmittedName(name)
        setSubmittedEmail(email)
    }

    function updateState (event) {
        
    }

    return (
        <MedicalForm 
        handleSubmit={handleSubmitForm}
        name={name}
        email={email}
    )
}