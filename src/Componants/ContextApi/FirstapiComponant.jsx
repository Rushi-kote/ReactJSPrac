import React from 'react'
import SecondapiComponant from './SecondapiComponant'
import { createContext } from 'react'

export const data = createContext("rushi");

const FirstapiComponant = () => {
    // console.log(data);
  return (
    <>
        <div>FirstapiComponant : {data._currentValue}</div>
        <data.Provider value={data._currentValue}>
            <SecondapiComponant/>
        </data.Provider>
    </>
  )
}

export default FirstapiComponant