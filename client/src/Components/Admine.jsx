import React, { useEffect, useState } from 'react'
import '../Styles/Admine.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Axios from 'axios'

const Admine = () => {

  const[name,setname] = useState("");
  const[glink,setglink] = useState("");
  const[wlink,setwlink] = useState("");
  const[ilink,setilink] = useState("");

  const[users,setusers] = useState([]);

  const addp = ()=>{
    Axios.post("https://portfolio-app-mu-nine.vercel.app/addprojects",{
      name:name,
      glink:glink,
      wlink:wlink,
      ilink:ilink
    }).then(()=>{
      alert("Project Added Successsfully")
    }).catch((error)=>{
      console.log(error)
    })
  }


  useEffect(()=>{
    Axios.get("https://portfolio-app-mu-nine.vercel.app/viewprojects")
    .then((response)=>{
      setusers(response.data)
    })
  },[])

  const del = (id)=>{
    Axios.delete("https://portfolio-app-mu-nine.vercel.app/deleteprojects/"+id)
    .then(()=>{
      alert("Project Deleted successfully")
    })
  }

  return (
    <>

    <Navbar/>

    <div className='atext'>
      <h4>Hey User Add</h4>
      <h1>Projects</h1>
    </div>


    <br></br>
    <div className='form1'>
      <input placeholder='Enter the name of project here' onChange={(e)=>{setname(e.target.value)}}></input>
      <br></br>
      <br></br>
      <input placeholder='Enter the glink of project here' onChange={(e)=>{setglink(e.target.value)}}></input>
      <br></br>
      <br></br>
      <input placeholder='Enter the wlink of project here' onChange={(e)=>setwlink(e.target.value)}></input>
      <br></br>
      <br></br>
      <input placeholder='Enter the ilink of project here' onChange={(e)=>{setilink(e.target.value)}}></input>
      <br></br>
      <br></br>
      <button onClick={addp}>Submit</button>
    </div>
    <br></br>
    <h1 className='li'>List Of Projects</h1>
    {
      users.map((user)=>{
        return(
          <div className='dset'>
            <h4>Name:{user.name}</h4>
            <h4>Glink:{user.glink}</h4>
            <h4>Wlink:{user.wlink}</h4>
            <h4>Ilink:{user.ilink}</h4>
            <button onClick={(e)=>del(user._id)}>Delete</button>
          </div>
        )
      })
    }
    <br></br>
    <Footer/>
    </>
  )
}

export default Admine