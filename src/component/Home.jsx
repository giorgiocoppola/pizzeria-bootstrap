
import Header from './Header';
import Footer from './Footer';
import Pizze from './Pizze';
import pizze from '../minicomponent/pizze';
import './Home.css'
import { useState } from 'react';





function Home() {

  const [elencopizze,setElencoPizze] = useState([...pizze]);
  const [formdata,setFormdata] = useState({
     nome: "",
     img: "",
     prezzo: "" ,
  })


  const handleChange = (e) => {


     const {name,value,type,checked} = e.target;
     const inputValue = type == "checkbox" ? checked : value;

     setFormdata({...formdata,
      [name] : inputValue })
  }

  const handleDelete = id => {   

  const newpizze = elencopizze.filter((pizza) => pizza.id !== id);
  setElencoPizze(newpizze);
   
    
  } 

  const aggiungipizza = (e) => {
                
             e.preventDefault();

             setFormdata({
              nome: "",
              img: "",
              prezzo: ""
             })
             setElencoPizze([...elencopizze,
             {
              id : Math.random(),
              nome : formdata.nome,
              img : formdata.img,
              prezzo : formdata.prezzo,
             },
 
            ])
      
  }

  return (
    <div className="App">
      <Header />
      <h1 className='titolo text-center text-danger fw-bolder'>Cosa desideri ordinare?</h1>
      <hr />

      <form className='d-flex justify-content-around'>

        <div>

            <label>Nome:</label>
            <input  type="text" name="nome" className='ms-3' value={formdata.nome} onChange={handleChange}/>

        </div>

        <div>

            <label>Prezzo:</label>
            <input type="text" name="prezzo" className='ms-3' value={formdata.prezzo} onChange={handleChange}  />

        </div>

        <div>

            <label>Immagine:</label>
            <input type="text" name="img" className='ms-3' value={formdata.img} onChange={handleChange} />

        </div>


      <button type='submit' className='btn btn-danger text-white text-center' onClick={aggiungipizza}>Aggiungi pizza</button>
      </form>

      

      <div className='row justify-content-center ms-0'>    
          {
            elencopizze.map((pizza) =>{
            return <Pizze key={pizza.id} {...pizza} handleDelete={handleDelete} />
            })}
      </div>

      <Footer />
    </div>

    
  );
}

export default Home;