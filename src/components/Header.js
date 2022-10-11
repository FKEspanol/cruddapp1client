import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextAPI } from '../App';

const Header = () => {
   const { currentLink } = useContext(ContextAPI);
   //console.log(currentLink)

   return (
      <header>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
               <Link className="navbar-brand" to="https://bootswatch.com/litera/#">Navbar</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav me-auto">
                     <li className="nav-item">
                        <Link className={`nav-link ${currentLink === 'loginForm' && 'active'}`} to="/loginUser">Login</Link>
                     </li>
                     <li className="nav-item">
                        <Link className={`nav-link ${currentLink === 'registerForm' && 'active'}`} to="/registerUser">Register</Link>
                     </li>
                  </ul>
                  <form className="d-flex">
                     <input className="form-control me-sm-2" type="text" placeholder="Search" />
                     <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                  </form>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Header