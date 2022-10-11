import React from 'react';
import RegisterForm from './sub_components/RegisterForm';
import LoginForm from './sub_components/LoginForm';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
   return (
      <main className='container pt-5'>
         <Routes>
            <Route
               path='/registerUser'
               element={<RegisterForm />}
            />
            <Route
               path='/loginUser'
               element={<LoginForm />}
            />
         </Routes>
      </main>
   )
}

export default Main