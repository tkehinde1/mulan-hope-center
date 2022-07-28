import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import hopeCenterLogo from '/workspace/mulan-hope-center/reset-password/src/Components/Hope-Center-Logo.png';

function ForgotPasswordVerify({ formData, setFormData }) {

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
          
        < Paper elevation={24} sx={{height: 650, width: 528, background:"#ffffffff", borderRadius: "50px"}}>

          <Typography variant='h4' sx={{textAlign: 'center', color:"#3449B5", fontWeight: 600}} mb={5}>
          Enter The Code Sent To Your Chosen Contact(xxx93@gmail.com)         
           </Typography>

          <Typography variant='h6' sx={{textAlign: 'left', }} mt={3}>
            Code:
          </Typography>

          <TextField
          variant="filled"
          fullWidth
          placeholder=''
          sx={{mt:0.5, background:"#DEE2E8",borderRadius:'80px', color:'black'}}
          InputProps={{ style: { fontSize: 24 } }}
          InputLabelProps={{ style: { fontSize: 24 } }}
          />


          
          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button  sx={{
              borderRadius: "500px", 
              backgroundColor:"primary.main", 
              color:"black", 
              width:180, 
              height:80 
              }}>
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
    </ThemeProvider>

    </div>
  );
}

export default ForgotPasswordVerify;
