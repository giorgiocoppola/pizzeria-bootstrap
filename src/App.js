
import './App.css';
import Header from './component/Header';
import Pizze from './component/Pizze';
import pizze from './minicomponent/pizze'


function App() {
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

export default App;
