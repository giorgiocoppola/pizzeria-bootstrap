import React from 'react'
import {Link} from 'react-router-dom'


function Registrazione() {
  return (
    <div className="registrazione">
         <div className="accedi">
          <nav className="navbar navbar-dark bg-dark">
             <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"><Link className="link-light text-decoration-none" to="/">Pizzeria Angolo Rosso</Link></span>
             </div>
          </nav>
              <h1 className="text-center text-danger fs-1">Registrazione</h1>
      
         </div>
    </div>
  )
}

export default Registrazione