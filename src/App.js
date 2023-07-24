import React from "react";
import { useFormik } from 'formik'
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues:{
      emailField:'',
      pswField: ''
    },
    onSubmit: values =>{
      //console.log("form:", values);
      alert("Login Successful");
    },
    validate: values =>{
      let errors = {}
        if(!values.emailField) errors.emailError = "Field required";
        if(!values.pswField) errors.pswError = "Field required";
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) errors.emailError = "Username should be an email";
        return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="emailField" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.emailError ? <div id="emailError" style={{color:'red'}}>{formik.errors.emailError}</div>: null }
        <div>Password</div>
        <input name="pswField" id="pswField" type="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.pswError ? <div id="pswError" style={{color:'red'}}>{formik.errors.pswError}</div>: null }
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
