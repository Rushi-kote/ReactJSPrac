import React from 'react'
import { useEffect } from 'react'

function UseEffect() {
    useEffect(()=>{
        alert("this will pop-up after componant render");
    },[]);
  return (
    <div>UseEffect</div>
  )
}

export default UseEffect

// this will happen at backend first componant is got loaded and after that
// useEffect will run but we will see useEffect first and then componant
// Search for this and confirm