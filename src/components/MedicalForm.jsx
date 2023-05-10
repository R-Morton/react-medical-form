

export default function MedicalForm(props) {

    handleChangeInput = (event) => {
        this.props.updateState(event.target.name, event.target.value);
      }
    

      return (
        <form onSubmit={props.handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={props.name} onChange={handleChangeInput} />
            <label>Email:</label>
            <input type="text" name="email" value={props.email} onChange={handleChangeInput} />
        </form>
      )
}
