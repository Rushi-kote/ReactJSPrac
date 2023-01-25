import React from 'react'
import { useContext } from 'react'
import { data } from './FirstapiComponant'

const FifthapiComponant = () => {
  let name = useContext(data);
  return (
    <div>FifthapiComponant: {name}</div>
  )
}

export default FifthapiComponant