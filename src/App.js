import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import Accedi from './component/Accedi'
import Registrazione from './component/Registrazione'
import Descrizione1 from './info/Descrizione1'

function App() {
  return <Router >
           <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/accedi' element={<Accedi />} />
            <Route path='/registrazione' element={<Registrazione />} />
            <Route path='/descrizione1' element={<Descrizione1/>} />
           </Routes>
         </Router>  
}

export default App
