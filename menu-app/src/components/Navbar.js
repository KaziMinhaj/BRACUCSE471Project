import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
   return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5" >
      <div className="container-fluid">
        <Link className="navbar-brand col-lg-4" to="#">Food Express</Link>
          <button className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav col-lg-4">
            <li className="nav-item">
              <Link className="nav-link" exact to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex col-lg-5">
            <input  className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
      <form class="container-fluid justify-content-end">
        <Link className="btn btn-warning" exact to="/login">Login</Link>
      </form>
      </div>
    </div>
  </nav>
 
   )
}
