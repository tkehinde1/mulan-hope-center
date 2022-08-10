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
  Paper,
} from "@mui/material";
import React from "react";
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useNavigate } from 'react-router-dom';

const boxstyle1 = {
  color: "white",
  background: "#3449B5",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'center',
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
  flexWrap: 'wrap',
  height: '95vh',
  width: '206vh',
  display: 'flex',
  flexDirection: 'column',
}
function Account ({mode,setMode}) {
  let navigate = useNavigate();

  return (
    <ThemeProvider  theme={ButtonTheme}>
      <Box   sx={{display:'flex', alignItems: 'center', }} style={boxstyle1}>
    <ArrowLeftIcon sx={{ fontSize: 40 }}/>
  <Button onClick={() => {navigate("/SettingsP")}} justifyContent="flex-start" style={{ maxWidth: "100px",minWidth: "100px", maxHeight: "30px",minHeight: "30px"}} type="submit" size="large" variant="contained">
  Back
</Button>
  </Box>
    <Box   sx={{display:'flex', alignItems: 'center', }} style={boxstyle}>
      <Typography color ="yellow" variant="h1" component="div" gutterBottom>
        Account
      </Typography>
<Button onClick={() => {navigate("/NewPAssword")}} style={{ maxWidth: "500px",minWidth: "500px"}} type="submit" size="large" variant="contained">
  Change Password
</Button>
<Button style={{ maxWidth: "500px",minWidth: "500px"}} size="large" variant="contained">
  Donation History
</Button>
<Button onClick={() => {navigate("/2FA")}} style={{ maxWidth: "500px",minWidth: "500px"}} size="large" variant="contained">
  2 Factor Authentication
</Button>
<Button onClick={() => {navigate("/")}} style={{ maxWidth: "500px",minWidth: "500px"}} size="large" variant="contained">
  Logout
</Button>
<Button style={{ maxWidth: "500px",minWidth: "500px"}} size="large" variant="contained">
  Help
</Button>
<Button onClick={() => {navigate("/DeleteAccount")}} style={{ maxWidth: "500px",minWidth: "500px"}} size="large" variant="contained">
  Delete Account
</Button>
</Box>
</ThemeProvider>
  );
};
export default Account;







