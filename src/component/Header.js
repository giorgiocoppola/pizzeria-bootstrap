import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1"><Link className="link-light text-decoration-none">Pizzeria Angolo Rosso</Link></span>
      <button type="button" className="btn btn-danger text-light btn-info" ><Link className="link-light text-decoration-none" to="/accedi">Accedi</Link></button>
    </div>
  </nav>
  )
}

export default Header