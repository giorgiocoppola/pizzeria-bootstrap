
import Header from './Header';
import Pizze from './Pizze';
import pizze from '../minicomponent/pizze'


function Home() {
  return (
    <div className="App">
      <Header />
      <h1 className='text-center text-danger'>Cosa desideri ordinare?</h1>
      <hr />

      <div className='row'>    
          {
            pizze.map((pizza) =>{
            return <Pizze key={pizza.id} {...pizza} />
            })}
      </div>

    </div>

    
  );
}

export default Home;