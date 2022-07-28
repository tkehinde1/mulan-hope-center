import * as React from 'react'; 

import { Box, Typography, Paper, Button, TextField, ThemeProvider } from '@mui/material';
import logo from "./Components/Hope-Center-Logo.png";
import ButtonTheme from './ButtonTheme';





function Login() {

    const boxstyle = {
        background: "#3448B5",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'center',
        flexWrap: 'wrap',
        height: '100vh',
    }

    return(
    
    <ThemeProvider  theme={ButtonTheme}>
    
    <Box style={boxstyle} fullWidth > 
          
        <Paper elevation={24} sx={{height: 1166, width: 724, background:"#5AA6C4", borderRadius: "50px"}}>
          <Box sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={logo} alt="Hope Center Logo" align="center" width="532" height="312"/>
          </Box>
          
        
          {/* <Typography variant='h3' sx={{textAlign: 'center', color:"#3449B5", fontWeight: 600}} mb={5}>
            
            Login
          </Typography> */}

          <Typography variant='h6' sx={{textAlign: 'left', }} mt={3}>
            Username:
          </Typography>

          <TextField
          variant="filled"
          fullWidth
          placeholder='Username Here'
          sx={{mt:0.5, background:"#D7D1B3",borderRadius:'80px', color:'black'}}
          InputProps={{ style: { fontSize: 24 } }}
          InputLabelProps={{ style: { fontSize: 24 } }}
          />

          
          <Typography variant='h6' sx={{textAlign: 'left'}} mt={3}>
            Password:
          </Typography>
          

          <TextField
          type = "password"
          variant="filled"
          fullWidth
          placeholder='Password Here'
          sx={{mt:0.5, background:"#D7D1B3", borderRadius:'80px'}}
          InputProps={{ style: { fontSize: 24 } }}
          InputLabelProps={{ style: { fontSize: 24 } }}
            />

          

          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button  sx={{borderRadius: "500px", backgroundColor:"primary.main", color:"black", width:180,height:80 }}>
              Login
            </Button>
          </Box>
          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Button  sx={{borderRadius: "500px", backgroundColor:"primary.main", color:"black", width:180,height:80 }}>
              Forgot Password 
            </Button>
            <Button  sx={{ display:"flex", borderRadius: "500px", backgroundColor:"primary.main", color:"black", width:180,height:80, justify: "space-evenly" }}>
              Sign Up
            </Button>
          </Box>

        </Paper>
        

    </Box>
    </ThemeProvider>
    );
} 

export default Login;