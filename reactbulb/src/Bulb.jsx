import React, { useState } from 'react'
import bulbimage from "./images/bulb.jpg"
import "./Bulb.css"
const Bulb = () => {
    const [light,setLight]=useState(false)
    
   
  return (<div >
    <div className='bulb' style={{position:'relative',marginLeft:300, marginTop:100}}>
        <img  src={bulbimage} alt="bulb" />
       <div className={light?'position':null} >
       </div>
      
    </div>
     <button onClick={()=>setLight(!light)}> <h2>{light?"off":"on"}</h2></button>
     </div>
  )
}

export default Bulb