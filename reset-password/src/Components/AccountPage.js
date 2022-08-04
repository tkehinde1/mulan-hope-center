import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
  import {
    Typography,
    Button,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  import React from "react";
  import ButtonTheme from './ButtonTheme'
  import { ThemeProvider } from '@mui/material';
  import { useNavigate } from 'react-router-dom';

  function Account ({mode,setMode}) {

    let navigate = useNavigate();


  const boxstyle1 = {
    color: "white",
    background: "#3449B5",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
    flexWrap: 'wrap',
    height: '100vh',
    width: '206vh'
  }
  const boxstyle = {
    color: "white",
    background: "#3449B5",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
    flexWrap: 'wrap',
    height: '100vh',
    width: '206vh'
  }
  
  
  
  
    return (
      <ThemeProvider  theme={ButtonTheme}>
  
      <Box  mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}} style={boxstyle}>
        <Typography color ="yellow" variant="h1" component="div" gutterBottom>
          Account
        </Typography>
  <Button fullWidth onClick={() => {navigate("/EnterInfo")}} type="submit" size="large" variant="contained">
    Change Password
  </Button>
  
  <Button  fullWidth size="large" variant="contained">
    Donation History
  </Button>
  <Button fullWidth onClick={() => {navigate("/2FA")}} size="large" variant="contained">
    2 Factor Authentication
  </Button>
  <Button  fullWidth onClick={() => {navigate("/")}}size="large" variant="contained">
    Logout
  </Button>
  <Button  fullWidth size="large" variant="contained">
    Help
  </Button>
  <Button fullWidth onClick={() => {navigate("/DeleteAccount")}} size="large" variant="contained">
    Delete Account
  </Button>
  </Box>
  </ThemeProvider>
    );
  };
  
  export default Account;
