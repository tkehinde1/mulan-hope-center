import * as React from 'react'; 
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import hopeCenterLogo from '/workspace/mulan-hope-center/reset-password/src/Components/Hope-Center-Logo.png';


function EnterInfo() {

    const boxstyle = {
        background: "#3449B5",
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
          
        < Paper elevation={24} sx={{height: 650, width: 528, background:"#F4E8A7", borderRadius: "50px"}}>

          <Typography variant='h3' sx={{textAlign: 'center', color:"#3449B5", fontWeight: 600}} mb={5}>
            Enter your Email or Phone Number To Reset Your Password
          </Typography>

          <Typography variant='h6' sx={{textAlign: 'left', }} mt={3}>
            Email:
          </Typography>

          <TextField
          variant="filled"
          fullWidth
          placeholder='ex: john@gmail.com'
          sx={{mt:0.5, background:"#D7D1B3",borderRadius:'80px', color:'black'}}
          InputProps={{ style: { fontSize: 24 } }}
          InputLabelProps={{ style: { fontSize: 24 } }}
          />

          
          <Typography variant='h6' sx={{textAlign: 'left'}} mt={3}>
            Phone Number:
          </Typography>
          

          <TextField
          variant="filled"
          fullWidth
          placeholder='ex: 123-234-3425'
          sx={{mt:0.5, background:"#D7D1B3", borderRadius:'80px'}}
          InputProps={{ style: { fontSize: 24 } }}
          InputLabelProps={{ style: { fontSize: 24 } }}
            />

          <Typography variant='h6' sx={{textAlign: 'center', fontWeight: 600, color:"#626058" }} mt={3}>
            *Info must match account
          </Typography>

          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button  sx={{borderRadius: "500px", backgroundColor:"primary.main", color:"black", width:180,height:80 }}>
              Submit
            </Button>
          </Box>

        </Paper>
        

    </Box>
    </ThemeProvider>
    );
} 

export default EnterInfo;