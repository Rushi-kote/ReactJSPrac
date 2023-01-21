import React from 'react'
import { Link } from 'react-router-dom'

const FirstComp = () => {
  return (
    <div>FirstComp
      <Link to='/second' state={{name:"Rushi"}}><p>jump to second</p></Link>
      <Link to='/second'><button>Jump</button></Link>
    </div>
  )
}

export default FirstComp