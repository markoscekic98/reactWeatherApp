import React from 'react'
import {Link } from 'react-router-dom';


const NavBar = ()=>{
    return(
        <nav className="navbar is-dark is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          
      
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to='/weather' className="navbar-item">
              Home
            </Link>
      
            <Link to='/contact' className="navbar-item">
              Contact
            </Link>
            </div>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
      </nav>

    )
}


export default NavBar