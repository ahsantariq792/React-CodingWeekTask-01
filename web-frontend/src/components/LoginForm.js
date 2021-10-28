import '../App.css';
import {useHistory} from "react-router-dom";
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import axios from 'axios';
import { baseurl } from '../core';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),

  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});





function Loginform() {

  let history = useHistory();

  const submit = (values) => {
    console.log("values", values)
    axios.post(`${baseurl}/api/v1/login`,
      {
        email: values.email,
        password: values.password
      })
      .then(res => {
        console.log(res.data);
        localStorage.setItem('name',res.data.name)
        localStorage.setItem('email',res.data.email)
        localStorage.setItem('phone',res.data.phone)
        alert('User Logined')

        if (res.data.email) {
          setTimeout(() => {
          history.push("/profile")
            
          }, 2000);
        }

        
      })



  }

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: '',
      password: '',

    },
    onSubmit: submit
  },
  );


  return (
    <>
      <div className="app-main">
        <div className="main">
          <form onSubmit={formik.handleSubmit}>

            <h3> Login Form </h3>

            <TextField
              id="outlined-basic"
              name="email"
              label="email"
              className="inputbox"
              value={formik.values.email}
              onChange={formik.handleChange}

              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}


              variant="outlined" />

            <TextField
              id="outlined-basic"
              name="password"
              label="password"
              type="password"
              className="inputbox"

              value={formik.values.password}
              onChange={formik.handleChange}


              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}

              variant="outlined" />


            <Button id="btn" variant="contained" color="success" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Loginform;