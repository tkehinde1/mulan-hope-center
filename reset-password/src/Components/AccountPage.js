import {
  Typography,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import hopeCenterLogo from '/workspace/mulan-hope-center/reset-password/src/Components/Hope-Center-Logo.png';
const boxstyle2 = {
  color: "white",
  background: "#3449B5",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'right',
  flexWrap: 'wrap',
  height: '3vh',
  width: '206vh'
}
const boxstyle1 = {
  color: "white",
  background: "#3449B5",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'left',
  flexWrap: 'wrap',
  height: '5vh',
  width: '206vh'
}
const boxstyle = {
  color: "white",
  background: "#3449B5",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'center',
  
  height: '95vh',
  width: '206vh',
  display: 'flex',
  flexDirection: 'column', 
 
}



const Account = ({mode,setMode}) => {
  return (
   
    <ThemeProvider  theme={ButtonTheme}>
      <Box sx={{width: '200'}}>
     
      <Box   sx={{display:'flex', alignItems: 'flex-start', }} style={boxstyle1}>
    <ArrowLeftIcon sx={{ fontSize: 40 }}/>
  <Button justifyContent="flex-start" style={{ maxWidth: "100px",minWidth: "100px", maxHeight: "30px",minHeight: "30px"}} type="submit" size="large" variant="contained">
  Back
</Button>
  </Box>
  <Box   sx={{display:'flex', alignItems: 'flex-end', }} style={boxstyle2}>
<img justifyContent="flex-end" src={hopeCenterLogo} height="75" width="150" alt="hopeCenterlogo"/>
  </Box>

    <Box   sx={{display:'flex', alignItems: 'center', }} style={boxstyle}>
      <Typography color ="yellow" variant="h1" component="div" gutterBottom>
        Account
      </Typography>
<Button style={{ maxWidth: "500px",minWidth: "500px"}} type="submit" size="large" variant="contained">
  Change Password
</Button>
    
<Button style={{ maxWidth: "500px",minWidth: "500px"}} size="large" variant="contained">
  Donation History
</Button>
<Button style={{ maxWidth: "500px",minWidth: "500px"}} size="large" variant="contained">
  2 Factor Authentication
</Button>
<Button style={{ maxWidth: "500px",minWidth: "500px"}} size="large" variant="contained">
  Logout
</Button>
<Button style={{ maxWidth: "500px",minWidth: "500px"}} size="large" variant="contained">
  Help
</Button>
<Button style={{ maxWidth: "500px",minWidth: "500px"}} size="large" variant="contained">
  Delete Account
</Button>


</Box>
</Box>
</ThemeProvider>
  );
};

export default Account;







