import { Button,Toolbar,Typography,AppBar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navibar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={'dark blue'} sx={{ flexGrow: 1 }} align='left'>New App</Typography>
                <Button variant='text' color='error'><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link></Button>
                <Button variant='text' color='error'><Link to={'/first'} style={{textDecoration:'none',color:'white'}}>First</Link></Button>
                <Button variant='text' color='error'><Link to={'/table'} style={{textDecoration:'none',color:'white'}}>Table</Link></Button>
                <Button variant='text' color='error'><Link to={'/axios'} style={{textDecoration:'none',color:'white'}}>Axios</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navibar