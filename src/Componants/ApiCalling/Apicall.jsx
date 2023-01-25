import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import  axios  from 'axios';

const Apicall = () => {
    const [data,setData] = useState("");
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then((Response)=>Response.json())
        // .then(Response=>{
        //     setData(Response);
        //     console.log(Response);
        // })
        // .catch(error=>console.log(error))
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(Response=>{
            setData(Response.data);
            console.log(Response);
        })
    },[]);
    
  return (
    <tbody>{
        data && data.map((e,index)=>{
            return(
                // <div key={index}>{e.username}</div>
                <tr key={index}>
                    <td>{e.id}</td>
                    <td>{e.username}</td>
                </tr>
            );
        })
    }</tbody>   

  )
}

export default Apicall;