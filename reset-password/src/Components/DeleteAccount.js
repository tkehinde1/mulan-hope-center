import React, { useState } from 'react'; 
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import hopeCenterLogo from '/workspace/mulan-hope-center/reset-password/src/Components/Hope-Center-Logo.png';

function DeleteAccount({ formData, setFormData }) {
const [page, setPage] = useState(0);

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
          
        < Paper elevation={24} sx={{height: 650, width: 528, background:"#ffffff", borderRadius: "50px"}}>

          <Typography variant='h2' sx={{textAlign: 'center', color:"black", fontWeight: 600}} mb={5}>
          DeleteAccount
          </Typography>

          <Typography variant='h3' sx={{textAlign: 'center', }} mt={3}>
          *Account wont be able to be retrieved after the deletion
          </Typography>


          
          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button  sx={{
              borderRadius: "500px", 
              backgroundColor:"red", 
              color:"white", 
              width:180, 
              height:80 
              }}>
              Continue
            </Button>
          </Box>

          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button  sx={{borderRadius: "500px", backgroundColor:"#DEE2E8", color:"black", 
            width:180,
            height:80 }}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
              Go Back
            </Button>
          </Box>

        </Paper>
        

    </Box>
    </ThemeProvider>

    </div>
  );
}

export default DeleteAccount;
