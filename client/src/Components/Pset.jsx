import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import  '../Styles/pset.css'

const Pset = () => {
    const[data,setdata] = useState([]);

    useEffect(()=>{
        Axios.get("https://portfolio-app-mu-nine.vercel.app/viewprojects").then((response)=>{
            setdata(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[]);


  return (
    <>
    <div className='s1'>
        {
            data.map((user)=>{
                return(
                    <div className='ss1'>
                        <img src={user.ilink} className='iilinks'></img>
                        <h2>{user.name}</h2>
                        <br></br>
                        <a href={user.glink}>GitHub</a>
                        <a href={user.wlink}>Live Demo</a>
                    </div>
                )
            })
        }
        </div>
    </>
  )
}

export default Pset
