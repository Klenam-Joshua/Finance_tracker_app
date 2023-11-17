import { useReducer, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//components

import Navbar from './Components/FormsWrapper/Navbar/Navbar';
import SignIn from './Pages/SignIn/SignIn';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import { useContext } from 'react';
import { AuthContext } from './Components/Context/AuthContext';



// css
import "./assets/styles/global.css"





function App() {
 
const {user,authIsReady} = useContext(AuthContext)
   return(
        <Router>
              
                  <Navbar>
             {           
                  authIsReady &&

        
              <Routes>
                    <Route exact  path='/login'  element={user ? <Home/>  : <SignIn />}/>
                    <Route  path='/signup'  element={user ? <Home/> : <Signup />}/>
                    <Route  path='/' 
                     element={  user ? <Home  /> : <SignIn/>}/>
              </Routes>

}
              </Navbar>
              
        </Router>
   )
  
}

export default App
