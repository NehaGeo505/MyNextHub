import { TextField,Button,Typography } from '@mui/material'
import React,{useState} from 'react'

const State2 = () => {
    var [pname,setPname]=useState("");
    var [val,setVal]=useState("");

    const inputHandler = (e)=>{
        setVal(e.target.value);
        console.log(val)
    }

    const changeName = ()=>{
        setPname(val)
        setVal("")
    }

  return (
    <div>
        <Typography variant='h4'>Hello {pname}</Typography>
        <TextField variant='outlined' value={val} label='Name' onChange={inputHandler}></TextField>
        <br/>
        <br/>
        <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default State2