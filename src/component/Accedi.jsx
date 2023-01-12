import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer';
import './Accedi.css'

function Accedi() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [message2,setMessage2] = useState("");
    const [message3,setMessage3] = useState("");
    const [utenti,setUtenti] = useState([]);






    const handleSubmit = (e) => {

        e.preventDefault();
 

    if(email === "" && password === "") {

            
 
        setMessage("Campo obbligatorio");
        setTimeout( function() { setMessage("")},3000);
        setMessage2("Campo obbligatorio");
        setTimeout( function() { setMessage("")},3000);
       
        
    } 
    

    if(!(email === "@")) {

        setMessage("Devi inserire la @");
        setTimeout( function() { setMessage("")},3000);
    }

    
    if(email === "") {

       setPassword(password);
       setMessage("Campo obbligatorio");
       setTimeout( function() { setMessage("")},3000);
   } 
   
 

   if(password === "") {

       setEmail(email);
       setMessage2("Campo obbligatorio");
       setTimeout( function() { setMessage2("")},3000);
     
       
   } 

   if(email !== "" && password !== "") 
   {
   setEmail("");
   setPassword("");
   setUtenti( [...utenti, { id: utenti.length + 1,
                  email : email,
                  password : password 
             }])
   setMessage3("Messaggio inviato");
   setTimeout( function() { setMessage3("")},3000);
   }

}

  return (
    <div className="accedi">
          <nav className="navbar navbar-dark bg-dark">
             <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"><Link className="link-light text-decoration-none" to="/">Pizzeria Angolo Rosso</Link></span>
             </div>
          </nav>
              <h1 className="text-center text-danger fs-1 fw-bolder">Accedi</h1>

       <div className="pag-form pb-5">

       
            <form className="border border-info rounded bg-info w-50 mx-auto">
                <div className="mb-3">
                   <label htmlFor="email" className="form-label fs-4">Email</label>
                   <input type="email" className="form-control border-info" id="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                   <p className="card-text text-center fw-bolder text-danger">{message}</p>
      
                 
                
  
                </div>

                <div className="mb-3">
                   <label htmlFor="password" className="form-label fs-4">Password</label>
                   <input type="password" className="form-control border-info" id="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
                   <p className="card-text text-center fw-bolder text-danger">{message2}</p>
                </div>
                <p className="card-text text-center text-dark">Per poterti registrare <Link to='/registrazione' className="link-light text-decoration-none text-danger fw-bolder" >clicca qui</Link> </p>
                <br />

                <div className="row g-3">

                   <button type="submit" onClick={handleSubmit} className="btn btn-primary fs-4">Invia</button>
                   <p className="card-text text-center fw-bolder text-success">{message3}</p>

                </div>
               
                
            </form> 

        </div>
           <Footer /> 
    </div>
       
  )
}

export default Accedi