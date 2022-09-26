import React from 'react'

function Pizze({img,prezzo,nome,ingredienti}) {
  return (
    <div className="col">
       <div className="card" style={{width: "400px",textAlign:'center'}}>
       <img src={img} className="card-img-top" alt={nome} width="400px" height="400px"/>
       <div className="card-body">
          <h5 className="card-title">{nome}</h5>
          <p className="card-text fs-6">{ingredienti}</p>
          <p className="card-text">{prezzo} €</p>
          <button  className="btn btn-outline-danger">Aggiungi</button>
          
         
         
        </div>
    </div>

    </div>
  )
}

export default Pizze