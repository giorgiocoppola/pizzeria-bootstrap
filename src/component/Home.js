
import Header from './Header';
import Footer from './Footer';
import Pizze from './Pizze';
import pizze from '../minicomponent/pizze';
import { useState } from 'react';





function Home() {

  const [elencopizze,setElencoPizze] = useState([...pizze]);



  const handleDelete = id => {

  const newpizze = elencopizze.filter((pizza) => pizza.id !== id);
  setElencoPizze({newpizze});
   
    
  } 

  return (
    <div className="App">
      <Header />
      <h1 className='text-center text-danger fw-bolder'>Cosa desideri ordinare?</h1>
      <hr />

      <div className='row ms-0'>    
          {
            pizze.map((pizza) =>{
            return <Pizze key={pizza.id} {...pizza} onDelete={handleDelete} />
            })}
      </div>

      <Footer />
    </div>

    
  );
}

export default Home;