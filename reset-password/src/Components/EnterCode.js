import * as React from 'react'; 
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import hopeCenterLogo from '/workspace/mulan-hope-center/reset-password/src/Components/Hope-Center-Logo.png';
import '/workspace/mulan-hope-center/reset-password/src/App.css';
import { useNavigate } from 'react-router-dom';

function EnterCode() {
  let navigate = useNavigate();
    const boxstyle = {
        background: "#3449B5",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'center',
        flexWrap: 'wrap',
        height: '110vh',
        position: 'relative'
    }


    return(
    <ThemeProvider  theme={ButtonTheme}> 
    <Box style={boxstyle} fullWidth > 
     
      <Box>
          <Box style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> 
           <img src={hopeCenterLogo} className='img' width={210} sx={{m:2}} height={100}  alt='hope center logo'/>
          </Box>

        < Paper elevation={24} sx={{height: 650, width: 528, background:"#FFFFFF", borderRadius: "50px", mt:4}}>

          <Typography variant='h4' sx={{textAlign: 'center', color:"#3449B5", fontWeight: 600}} mb={5}>
            Enter The Code Sent To Your Chosen Contact(xxx93@gmail.com)
          </Typography>

          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <TextField
            variant="filled"
            sx={{mt:0.5, background:"#D7D1B3",borderRadius:'80px', color:'black', width:'80%'}}
            InputProps={{ style: { fontSize: 24, } }}
            InputLabelProps={{ style: { fontSize: 24 } }}
            />
          </Box>

          
          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button  onClick={() => {navigate("/NewPassword")}} sx={{borderRadius: "500px", backgroundColor:"primary.main", color:"black", width:180,height:80 }}>
              Submit
            </Button>
          </Box>

          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button  sx={{borderRadius: "500px", backgroundColor:"primary.main", color:"black", width:180,height:80 }}>
              Resend Code
            </Button>
          </Box>

        </Paper>
      </Box>
    </Box>
    
      
    </ThemeProvider>
    );
} 

export default EnterCode;
