import React from 'react'
import { useState } from 'react'
const Conter = () => {

    const [state, setState] = useState(0);
    const handleClick =()=>{
        setState(state+1);
    }

  return (
    <div>Conter: {state} <br />
      <button onClick={handleClick}>clickMe</button>
    </div>
  )
}

export default Conter