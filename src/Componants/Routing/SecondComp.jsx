import React from 'react'
import { useLocation } from 'react-router-dom'

const SecondComp = () => {
  let data = useLocation();
  console.log(data);
  return (
    <div>{data.state.name}'s SecondComp</div>
  )
}

export default SecondComp