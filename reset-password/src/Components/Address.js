import * as React from 'react'; 
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import hopeCenterLogo from '/workspace/mulan-hope-center/reset-password/src/Components/Hope-Center-Logo.png';

function Address({ formData, setFormData }) {

const boxstyle = {
        background: "#3449B5",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'center',
        flexWrap: 'wrap',
        height: '100vh',
    }


  return (
    <div className="sign-up-container">
    <ThemeProvider  theme={ButtonTheme}>
    <Box style={boxstyle} fullWidth > 
          
        < Paper elevation={24} sx={{height: 650, width: 528, background:"#", borderRadius: "50px"}}>

          <Typography variant='h4' sx={{textAlign: 'center', color:"black", fontWeight: 600}} mb={5}>      
          Address
           </Typography>
          
            <Paper 
            elevation={5} 
            sx={{height: 400, 
            width: 528, 
            background:"#DEE2E8", 
            borderRadius: "50px", 
            }}>
            <Typography variant='h2' sx={{textAlign: 'left', }} mt={3}>
            365 Airport Rd.

                  New Castle, DE 19720
            </Typography>
            </Paper>

          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button variant="contained" sx={{borderRadius: "500px", backgroundColor:"#DEE2E8", color:"black", width:180,height:80 }} 
            className="App-link"
            href="https://www.google.com/maps?z=16&q=365%2Bairport%2Brd.%2Bnew%2Bcastle,%2Bde%2B19720"
            target="_blank"
            rel="noopener noreferrer"
         >
        
          Google Maps</Button>

          </Box>

        </Paper>
        

    </Box>
    </ThemeProvider>

    </div>
  );
}

export default Address;
