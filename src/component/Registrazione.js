import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'


function Registrazione() {

  const [nome,setNome] = useState("");
  const [cognome,setCognome] = useState("");
  const [citta,setCitta] = useState("");
  const [datanascita,setDatanascita] = useState("")
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [check,setCheck] = useState("");
  const [message,setMessage] = useState("");
  const [message2,setMessage2] = useState("");
  const [message3,setMessage3] = useState("");
  const [message4,setMessage4] = useState("");
  const [message5,setMessage5] = useState("");
  const [message6,setMessage6] = useState("");
  const [message7,setMessage7] = useState("");
  const [message8,setMessage8] = useState("");

  const handleSubmit = (e) => {

       e.preventDefault();

       if(nome === "" && cognome === "" && citta === "" && datanascita === "" && email === "" && password === "" && check === "") {

           
        setMessage("Campo obbligatorio");
        setTimeout( function() { setMessage("")},3000);
        setMessage2("Campo obbligatorio");
        setTimeout( function() { setMessage2("")},3000);   
        setMessage3("Campo obbligatorio");
        setTimeout( function() { setMessage3("")},3000);
        setMessage4("Campo obbligatorio");
        setTimeout( function() { setMessage4("")},3000);    
        setMessage5("Campo obbligatorio");
        setTimeout( function() { setMessage5("")},3000);
        setMessage6("Campo obbligatorio");
        setTimeout( function() { setMessage6("")},3000);
        setMessage7("Campo obbligatorio");
        setTimeout( function() { setMessage7("")},3000);

    } 


    if(nome !== "" && cognome !== "" && citta !== "" && datanascita !== "" && email !== "" && password !== "" && check !== "") {

      setNome("");
      setCognome("");
      setCitta("");
      setDatanascita("");
      setEmail("");
      setPassword("");
      setCheck("");
      setMessage8("Messaggio inviato");
      setTimeout( function() { setMessage8("")},3000);
       
    }


    if( nome === "") {

      setMessage("Campo obbligatorio");
      setTimeout( function() { setMessage("")},3000);
      setCognome(cognome);
      setCitta(citta);
      setDatanascita(datanascita);
      setEmail(email);
      setPassword(password);
      setCheck(check);
    }

    if( cognome === "") {

      setMessage2("Campo obbligatorio");
      setTimeout( function() { setMessage2("")},3000);
      setNome(nome);
      setCitta(citta);
      setDatanascita(datanascita);
      setEmail(email);
      setPassword(password);
      setCheck(check);
    }

    if( citta === "") {

      setMessage3("Campo obbligatorio");
      setTimeout( function() { setMessage3("")},3000);
      setNome(nome);
      setCognome(cognome);
      setDatanascita(datanascita);
      setEmail(email);
      setPassword(password);
      setCheck(check);
    }

    if( datanascita === "") {

      setMessage4("Campo obbligatorio");
      setTimeout( function() { setMessage4("")},3000);
      setNome(nome);
      setCognome(cognome);
      setCitta(citta);
      setEmail(email);
      setPassword(password);
      setCheck(check);
    }

    if( email === "") {

      setMessage5("Campo obbligatorio");
      setTimeout( function() { setMessage5("")},3000);
      setNome(nome);
      setCognome(cognome);
      setCitta(citta);
      setDatanascita(datanascita);
      setPassword(password);
      setCheck(check);
    }

    if( password === "") {

      setMessage6("Campo obbligatorio");
      setTimeout( function() { setMessage6("")},3000);
      setNome(nome);
      setCognome(cognome);
      setCitta(citta);
      setDatanascita(datanascita);
      setEmail(email);
      setCheck(check);
    }

    if( check === "") {

      setMessage7("Campo obbligatorio");
      setTimeout( function() { setMessage7("")},3000);
      setNome(nome);
      setCognome(cognome);
      setCitta(citta);
      setDatanascita(datanascita);
      setEmail(email);
      setPassword(password);
    }

    
  }



  return (
    <div className="registrazione">
         
          <nav className="navbar navbar-dark bg-dark">
             <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"><Link className="link-light text-decoration-none" to="/">Pizzeria Angolo Rosso</Link></span>
             </div>
          </nav>
              <h1 className="text-center text-danger fs-1 fw-bolder">Registrazione</h1>

           <form className="mx-auto border-info rounded bg-info mb-5 ps-5 pe-5">

              <div className="row g-3">

                  <div className="col md-6"> 
              
                     <label htmlFor="name" className="form-label text-light g-col-6 fs-5 ">Nome</label>
                     <input type="text" className="form-control" id="name" value={nome}  onChange={(e) => setNome(e.target.value)}/>
                     <p className="card-text text-center fw-bolder text-danger">{message}</p>
                    
                  </div>
                 
                  <div className="col md-6">

                     <label htmlFor="surname" className="form-label text-light fs-5">Cognome</label>
                     <input type="text" className="form-control" id="surname" value={cognome} onChange={(e) => setCognome(e.target.value)} />
                     <p className="card-text text-center fw-bolder text-danger">{message2}</p>
                  </div>

              </div>

              <div className="row g-3">

                  <div className="col md-6">

                      <label htmlFor="city" className="form-label text-light g-col-6 fs-5">Citta'</label>
                      <input type="text" className="form-control" id="city" value={citta} onChange={(e) => setCitta(e.target.value)} />
                      <p className="card-text text-center fw-bolder text-danger">{message3}</p>

                   </div> 

                  <div className="col md-6">
                     <label htmlFor="datadinascita" className="form-label text-light fs-5">Data di nascita</label>
                     <input type="date" className="form-control" id="datadinascita" value={datanascita} onChange={(e) => setDatanascita(e.target.value)}/>
                     <p className="card-text text-center fw-bolder text-danger">{message4}</p>
                  </div>

                </div>
               

               <div className="row g-3"> 
                
                  <div className="col md-6">
                     <label htmlFor="email" className="form-label text-light fs-5">Email</label>
                     <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                     <p className="card-text text-center fw-bolder text-danger">{message5}</p>
                  </div>

                  <div className="col md-6">
                     <label htmlFor="email" className="form-label text-light fs-5">Password</label>
                     <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                     <p className="card-text text-center fw-bolder text-danger">{message6}</p>
                  </div>

               </div>

               <br />
               <div className="row g-3">

               <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={check} onChange={(e)=> setCheck(e.target.checked)} id="checkbox" />
                    <label className="form-check-label text-light fs-6" for="checkbox">
                           Autorizzo il trattamento dei dati personali
                    </label>
                    <p className="card-text fw-bolder text-danger">{message7}</p>
                </div>
               </div>
               
               <br />

               <div className="row g-3">

                   <button type="submit" onClick={handleSubmit} className="btn btn-primary fs-4 ">Invia</button>
                   <p className="card-text fw-bolder text-success text-center">{message8}</p>
                   
               </div>
              

               </form>
      
              <Footer/>
         </div>
    
  )
}

export default Registrazione