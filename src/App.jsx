import { useReducer, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//components

import Navbar from './Components/FormsWrapper/Navbar/Navbar';
import SignIn from './Pages/SignIn/SignIn';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';



// css
import "./assets/styles/global.css"






function App() {
 
   return(
        <Router>
          <Navbar>

        
              <Routes>
                    <Route exact  path='/login'  element={<SignIn />}/>
                    <Route  path='/signup'  element={<Signup />}/>
                    <Route  path='/'  element={<Home/>}/>
              </Routes>
              </Navbar>
        </Router>
   )
  
}

export default App
