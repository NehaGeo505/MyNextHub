import React from 'react'
import { Button,TextField,Typography } from '@mui/material';

const First = () => {
  return (
    <div>
      <h1>Neha Geo</h1>
      <input placeholder="Name"/>
      <br/>
      <input type="password" placeholder="password"/>
      <br/>
      <button>Submit</button>
      <br/><br/>
      <Typography variant='h1' color='darkcyan' fontSize={40}>Neha Geo</Typography>
      <br/>
      <TextField variant='outlined' label='Name'/>
      <br/><br/>
      <Button variant='contained'>Submit</Button>
      <br/>
    </div>
  )
}

export default First 