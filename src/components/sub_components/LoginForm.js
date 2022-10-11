import React, { useState, useRef, useContext, useEffect } from 'react';
import DisplayFormErrorMessages from '../reusable/DisplayFormErrorMessages';
import endpoints from '../../server/endpoints';
import { ContextAPI } from '../../App';
import { actionTypes } from '../../reducer';

let formBody = {};
const LoginForm = () => {
   const { setCurrentLink, dispatch } = useContext(ContextAPI);

   const [errors, setErrors] = useState();
   const [invalidEmail, setInvalidEmail] = useState();
   const [invalidPassword, setInvalidPassword] = useState();

   const emailVal = useRef();
   const passwordVal = useRef();


   useEffect(() => setCurrentLink('loginForm'), [setCurrentLink])

   const handleChange = e => {
      const { name, value } = e.target;
      formBody = {
         ...formBody,
         [name]: value
      }
   }

   const handleSubmit = async e => {
      e.preventDefault();
      try {
         const response = await fetch(endpoints.loginUser, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(formBody)
         });

         const data = await response.json();
         // console.log(data);
         if (data.error)
            return setErrors(data.errors);
         setErrors();
         dispatch({ type: actionTypes.setInitialState, payload: data.currentUser });
         console.log(data)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <section className='col-6'>
         <form onChange={handleChange} onSubmit={handleSubmit}>
            <div className="form-group mb-3">
               <label htmlFor="email" className="form-label mt-4">Email address</label>
               <input
                  type="email"
                  className={`form-control ${(invalidEmail && 'is-invalid') || (emailVal.current?.value ? 'is-valid' : '')}`}
                  name='email'
                  id="email"
                  ref={emailVal}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
               />
               {
                  errors && <DisplayFormErrorMessages
                     inputName={'email'}
                     formErrors={errors}
                     setState={setInvalidEmail}
                  />
               }
            </div>
            <div className="form-group mb-3">
               <label htmlFor="password" className="form-label mt-4">Password</label>
               <input
                  type="password"
                  className={`form-control ${(invalidPassword && 'is-invalid') || (passwordVal.current?.value ? 'is-valid' : '')}`}
                  name='password'
                  id="password"
                  ref={passwordVal}
                  placeholder="Password"
               />
               {
                  errors && <DisplayFormErrorMessages inputName={'password'} formErrors={errors} setState={setInvalidPassword} />
               }
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
      </section>
   )
}

export default LoginForm;