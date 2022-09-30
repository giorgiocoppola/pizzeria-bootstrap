
import Header from './Header';
import Footer from './Footer';
import Pizze from './Pizze';
import pizze from '../minicomponent/pizze'


function Home() {
  return (
    <div className="App">
      <Header />
      <h1 className='text-center text-danger fw-bolder'>Cosa desideri ordinare?</h1>
      <hr />

      <div className='row ms-0'>    
          {
            pizze.map((pizza) =>{
            return <Pizze key={pizza.id} {...pizza} />
            })}
      </div>

      <Footer />
    </div>

    
  );
}

export default Home;