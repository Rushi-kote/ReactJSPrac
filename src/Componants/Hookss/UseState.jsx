import React from 'react'
import { useState } from 'react'

export default function UseState() {

  let [counter, setCounter] = useState(0);

  const inc = ()=>{
    setCounter(counter+1);
  }
  const dec = ()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <div> The Counter: {counter}</div>
      <div>
        <button onClick={inc}>Increment</button>
      </div>
      <div>
        <button onClick={dec}>Decrement</button>
      </div>
    </>
  )
}
