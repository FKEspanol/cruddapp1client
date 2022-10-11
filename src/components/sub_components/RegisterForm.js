
import React, { useState, useRef, useContext, useEffect } from 'react';

import endpoint from '../../server/endpoints';
import DisplayFormErrorMessages from '../reusable/DisplayFormErrorMessages';
import { ContextAPI } from '../../App';


let formBody = {};
const RegisterForm = () => {
   const { setCurrentLink } = useContext(ContextAPI);
   const [errors, setErrors] = useState();

   const [invalidFirstname, setInvalidFirstname] = useState();
   const [invalidLastname, setInvalidLastname] = useState();
   const [invalidEmail, setInvalidEmail] = useState();
   const [invalidPassword, setInvalidPassword] = useState();

   const firstnameVal = useRef();
   const lastnameVal = useRef();
   const emailVal = useRef();
   const passwordVal = useRef();

   useEffect(() => setCurrentLink('registerForm'), [setCurrentLink])

   const handleChange = e => {
      const { name, value } = e.target;
      formBody = {
         ...formBody,
         [name]: value
      }
   }

   // console.log('hello')
   const handleSubmit = async e => {
      e.preventDefault();
      console.log(formBody)
      try {
         const response = await fetch(endpoint.registerUser, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(formBody)
         });

         const data = await response.json();

         if (data.error)
            return setErrors(data.errors);
         setErrors();
      } catch (error) {
         console.error(error)
      }
   }

   return (
      <section className='col-6'>
         <form onChange={handleChange} onSubmit={handleSubmit}>
            <div className="mb-3">
               <label htmlFor="firstname" className="form-label">First Name</label>
               <input
                  type="text"
                  ref={firstnameVal}
                  className={`form-control ${(invalidFirstname && 'is-invalid') || (firstnameVal.current?.value ? "is-valid" : "")}`}
                  id="firstname"
                  name="firstname"
               />
               {
                  errors && <DisplayFormErrorMessages
                     inputName={"firstname"}
                     formErrors={errors}
                     setState={setInvalidFirstname}
                  />
               }
            </div>
            <div className="mb-3">
               <label htmlFor="lasttname" className="form-label">Last Name</label>
               <input
                  type="text"
                  ref={lastnameVal}
                  //* if the conditions are meet, bootstrap class is-invalid or is-valid will be set
                  className={`form-control ${(invalidLastname && 'is-invalid') || (lastnameVal.current?.value ? 'is-valid' : '')}`}
                  id="lastname"
                  name="lastname"
               />
               {
                  errors && <DisplayFormErrorMessages
                     inputName={"lastname"}
                     formErrors={errors}
                     setState={setInvalidLastname} />}
            </div>
            <div className="mb-3">
               <label htmlFor="email" className="form-label">Email address</label>
               <input
                  type="email"
                  ref={emailVal}
                  className={`form-control ${(invalidEmail && 'is-invalid') || (emailVal.current?.value ? 'is-valid' : '')}`}
                  id="email"
                  name="email"
               />
               {
                  errors && <DisplayFormErrorMessages
                     inputName={"email"}
                     formErrors={errors}
                     setState={setInvalidEmail} />}
            </div>
            <div className="mb-3">
               <label htmlFor="password" className="form-label">Password</label>
               <input
                  type="password"
                  ref={passwordVal}
                  className={`form-control ${(invalidPassword && 'is-invalid') || (passwordVal.current?.value ? 'is-valid' : '')}`}
                  id="password"
                  name="password"
               />
               {
                  errors && <DisplayFormErrorMessages
                     inputName={"password"}
                     formErrors={errors}
                     setState={setInvalidPassword} />}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
      </section>

   )
}

export default RegisterForm