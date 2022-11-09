import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textDecoration: 'none', color: 'gray' }}>
            Resume Summary
          </Typography>
          <Typography variant="h6" sx={{textDecoration: 'none', color: 'gray'}} component="a" href="https://github.com/19sajib/effective-goggles">
            GitHub Repo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar