import React from "react";
import { useState } from "react";

function App() {
  const initialValues = {email:"", password:""}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormValues({...formValues, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
  }
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if(!values.email){
      errors.email = "email is required"
    }
    if(!values.password){
      errors.password = "password is required"
    }
    return errors


  }


  return (
    <div className="App">
    <form onSubmit={handleSubmit} >
    <input type="text" placeholder='Email' name="email"  value={formValues.email} onChange={handleChange}/>
    <span>{formErrors.email}</span>
    <input type="password" placeholder='password' name="pasword" value={formValues.password} onChange={handleChange}/>
    <span>{formErrors.password}</span>
    <input  type="submit"/>

    </form>
     
    </div>
  );
}

export default App;
