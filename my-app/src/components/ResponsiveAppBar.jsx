import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "../assets/logo.jpeg";
import CardMedia from "@mui/material/CardMedia";
import Title from "../assets/title.jpeg";
import Box from "@mui/material/Box"
export const ResponsiveAppBar = () => {

  return (
    <AppBar position="static" sx={{bgcolor:"white"}}>
      <Toolbar>
        <Box component="img"
          sx={{
            height: 64,
          }}
          alt="correct logo"
          src={Logo}
        ></Box>
         <Box component="img"
          sx={{
            height: 64,
          }}
          alt="app title"
          src={Title}
      ></Box>
        </Toolbar>
    </AppBar>
  );
}
