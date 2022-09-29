import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


function Registrazione() {
  return (
    <div className="registrazione">
         
          <nav className="navbar navbar-dark bg-dark">
             <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"><Link className="link-light text-decoration-none" to="/">Pizzeria Angolo Rosso</Link></span>
             </div>
          </nav>
              <h1 className="text-center text-danger fs-1">Registrazione</h1>

           <form className="mx-auto border-info rounded bg-info mb-5">

              <div className="row g-3">

                  <div className="col md-6"> 
              
                     <label htmlFor="email" className="form-label text-light g-col-6 fs-5 ">Nome</label>
                     <input type="text" className="form-control" aria-label="First name" required />
              
                  </div>

                  <div className="col md-6">

                     <label htmlFor="email" className="form-label text-light fs-5">Cognome</label>
                     <input type="text" className="form-control" aria-label="Last name" />

                  </div>

              </div>

              <div className="row g-3">

                  <div className="col md-6">

                      <label htmlFor="city" className="form-label text-light g-col-6 fs-5">Citta'</label>
                      <input type="text" className="form-control" aria-label="City" />

                   </div> 

                  <div class="col md-6">
                     <label htmlFor="datadinascita" className="form-label text-light fs-5">Data di nascita</label>
                     <input type="date" className="form-control" aria-label="Born" />
                  </div>

                </div>
               

               <div class="row g-3"> 
                
                  <div class="col md-6">
                     <label htmlFor="email" className="form-label text-light fs-5">Email</label>
                     <input type="email" className="form-control" aria-label="email" />
                  </div>

                  <div class="col md-6">
                     <label htmlFor="email" className="form-label text-light fs-5">Password</label>
                     <input type="email" className="form-control" aria-label="password" />
                  </div>

               </div>

               <br />
               <div className="row g-3">

               <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label text-light fs-6" for="flexCheckChecked">
                           Autorizzo il trattamento dei dati personali
                    </label>
                </div>
               </div>
               
               <br />

               <div className="row g-3">

                   <button type="submit" className="btn btn-primary fs-4 ">Invia</button>
                   
               </div>
              

               </form>
      
              <Footer/>
         </div>
    
  )
}

export default Registrazione