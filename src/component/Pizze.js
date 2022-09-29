import React, { useState } from 'react'

function Pizze({max,img,prezzo,nome,ingredienti}) {

    const [count,setCount] = useState(0);
    const [message,setMessage] = useState("");

    const incrementa = () => {

        if(count >= max) {

            setCount(max);
            setMessage("Raggiunto il max degli ordini");
            setTimeout( function() { setMessage("")},3000)

        } else {

            setCount(count + 1);
        }

       
    }

    const decrementa = () => {

        if(count === 0) {

            setCount(0);

        } else {
  
            
            setCount(count - 1);
        }

    }

    const ordina = () => {

        if(count === 0) {

            setMessage("*Devi inserire un'ordine");
            setTimeout( function() { setMessage("")},3000)

        } else {
   
            setMessage("Ordine aggiunto");
            setTimeout( function() { setMessage("")},3000)

        }
    }

  return (
    <div className="col mb-4">
       <div className="card" style={{width: "400px",textAlign:'center'}}>
       <img src={img} className="card-img-top" alt={nome} width="400px" height="400px"/>
       <div className="card-body">
          <h5 className="card-title text-primary fs-4">{nome}</h5>
          <p className="card-text fs-4">{prezzo} €</p>
          <p className="card-text fs-4">{count}</p>
         
           <button  onClick={incrementa} className="btn btn-outline-danger">+</button>
           <button  onClick={decrementa} className="btn btn-outline-danger">-</button>
           <button  onClick={() => setCount(0)} className="btn btn-outline-danger">Reset</button>
           <br />
           <button  onClick={ordina} className="btn btn-outline-danger">Ordina</button>
           <p className="card-text text-danger">{message}</p>
         
         
        </div>
    </div>

    </div>
  )
}

export default Pizze