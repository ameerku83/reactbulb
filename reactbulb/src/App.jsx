
import React from 'react'
import Bulb from './Bulb'


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes  } from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';


function App() {
 
  return (
   <>
   
    {/* <Bulb/> */}
  <BrowserRouter>
  
  <Routes>
                <Route path="/reactbulb" element={<Signup/>} />
                <Route path="/reactbulb/login" element={<Login/>} />
                <Route path="/login/home" element={<Home/>} />
                
  </Routes>
  </BrowserRouter>
   </>
     
    

     
      
        
   

    
  )
}

export default App