import React from "react";
import { Box, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}
function TYDonation() {
    let navigate = useNavigate();
    return (
        <ThemeProvider  theme={ButtonTheme}>
        <Box backgroundColor= "#3449B5" fullWidth>
        <Stack direction= "row" spacing= "2" justifyContent="space-between" background= "#3449B5">
                <Button onClick={() => {navigate("/Donation")}} variant="contained" size="Small" startIcon={<ArrowBackIcon/>}>Back</Button>
            </Stack>
        </Box>
        <div>
        <Box style={boxstyle}>
        <Typography variant='h3' sx={{textAlign: 'center', color:"#04BB11", fontWeight: 400}}>
            Thank You for Your Donation!!!!
        </Typography>
        </Box>
        <Box style={boxstyle}>
        <img src="https://hopecenters.net/wp-content/uploads/2018/10/Hope-Center-Logo.png" height={400} width={600} alt="HopeCenter"/>
        </Box>
        <Box style={boxstyle} sx={{ '& button': { m: 5 } }}>
        <Button
        onClick={() => {navigate("/Donation")}}
         size="large"
         variant="contained"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         >
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
        SUBMIT ANOTHER DONATION
        </Typography>
        </Button>
        <Button
        onClick={() => {navigate("/Home")}}
         size="large"
         variant="contained"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         >
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
        BACK TO HOME PAGE
        </Typography>
        </Button>
        </Box>
      </div>
      </ThemeProvider>
    );
  }
  export default TYDonation;
