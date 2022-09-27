import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import Accedi from './component/Accedi'

function App() {
  return <Router >
           <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/accedi' element={<Accedi />} />
           </Routes>
         </Router>  
}

export default App
