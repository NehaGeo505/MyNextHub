import { Button,Typography } from '@mui/material'
import React,{useState} from 'react'

const Statebasics = () => {
    var [name,setName]=useState("Neha");
    var [hn,sethn]=useState("Home")
    const changename=()=>{
        setName("Manu")
    }

    const changeHome=()=>{
        sethn("Home")
    }

    const changeGallery=()=>{
        sethn("Gallery")
    }

    const changeHelp=()=>{
        sethn("Help")
    }


  return (
    <div>
        <Typography variant='h4'>{name}</Typography>
        <Button variant='contained' onClick={changename}>Change</Button>
        <br/>
        <br/>
        <br/>
        <Typography variant='h3'> Welcome to {hn}</Typography>
        <Button variant='contained' color="success" onClick={changeHome}>Home</Button>
        <Button variant='contained' color="success" onClick={changeGallery}>Gallery</Button>
        <Button variant='contained' color="success" onClick={changeHelp}>Help</Button>
        
            </div>
  )
}

export default Statebasics