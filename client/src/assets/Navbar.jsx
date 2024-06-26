import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "../App.css"
import SignOut from './SignOut.svg';
import userContext from '../auth/userContext';

const Navbar = () => {
  const value = useContext(userContext)
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/home" style={{ textDecoration: 'none', color: 'inherit', margin: "0 12px 0px 0" }}>
          Dog's Companion
        </Typography>
        <Button color="inherit" component={Link} to="/about" style={{ margin: "0 24px" }}>About</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        <Button color="inherit" onClick={()=>{value.setuser(false)}}><img src={SignOut} alt="" /></Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
