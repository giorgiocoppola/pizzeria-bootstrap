import React, { useEffect, useState } from 'react'







function Pizze({id,img,nome,prezzo,max, handleDelete}) {    

    const [count,setCount] = useState(0);
    const [message,setMessage] = useState("");
    const [descrizione,setDescrizione] = useState([]);
   


   useEffect( () =>{
   
   if(count === 0 ) {

    console.log("Aggiungi una pizza");

   } else if (count === 1) {

    console.log(`${count}  pizza`);

   } else {
   
    console.log(`${count}  pizze`);

   }

   
 } )
   
 

   

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


    const handleDesc = () => {

         setDescrizione( [...descrizione , {id:descrizione.length + 1,
                          img : img
                        }])
    }

  

  return (
    <div className="col mb-4">
       <div className="card" style={{width: "400px",textAlign:'center'}}>
       <img src={img} className="card-img-top" alt={nome} width="400px" height="400px"/>
       <div className="card-body">
          <h5 className="card-title text-primary fs-4">{nome}</h5>
          <p className="card-text fs-4">{prezzo} €</p>
          <p className="card-text fs-4">{count}</p>
         


         <div className="btn-1">

           <button  onClick={incrementa} className="btn btn-danger">+</button>
           <button  onClick={decrementa} className="btn btn-danger ms-3">-</button>
           <button  onClick={() => setCount(0)} className="btn btn-danger ms-3">Reset</button>

         </div>

         <div className="btn-2 mt-3">  

           <button  onClick={ordina} className="btn btn-danger">Ordina</button>
           <button   className="btn btn-danger ms-3" onClick={()=>handleDelete(id)}>Elimina</button>
           <p className="card-text text-danger">{message}</p>

         </div>
         
        </div>
    </div>

    </div>
  )
}

export default Pizze