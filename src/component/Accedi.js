import React from 'react'
import {Link} from 'react-router-dom'
import './Accedi.css'

function Accedi() {
  return (
    <div className="accedi">
          <nav className="navbar navbar-dark bg-dark">
             <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Pizzeria Angolo Rosso</span>
                <button type="button" className="btn btn-danger text-light btn-info" ><Link className="link-light text-decoration-none" to="/">Indietro</Link></button>
             </div>
          </nav>
              <h1 className="text-center text-danger">Accedi</h1>

            <form className="border border-info rounded bg-info w-75">
                <div class="mb-3">
                   <label for="email" className="form-label fs-4">Email address</label>
                   <input type="email" className="form-control border-info w-75" id="email" aria-describedby="emailHelp" />
  
                </div>

                <div class="mb-3">
                   <label for="password" class="form-label fs-4" id="psw">Password</label>
                   <input type="password" class="form-control border-info w-75" id="password" />
                </div>

                <button type="submit" class="btn btn-primary fs-4">Invia</button>
                
            </form>  
    </div>
  )
}

export default Accedi