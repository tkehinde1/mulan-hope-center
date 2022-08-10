import React from "react";
import { Box, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';


const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}
const linstyle = {
  display: 'flex',
  flexdirection: "column",
  alignItems: 'center',
  justifyContent: 'center',
  position: 'center',
}
function SettingsP() {
    let navigate = useNavigate();
    return (
        <div>
        <Box backgroundColor= "#3449B5" fullWidth>
            <Stack direction= "row" spacing= "2" justifyContent="space-between" background= "#3449B5" >
          <Card style={{backgroundColor: '#F4E8A7'}} sx={{display: {xs: "none", sm:"block"}}}>
        <CardContent theme={ButtonTheme}>
        <Button variant="contained" size="large" startIcon={<SettingsIcon />} color="inherit" onClick={() => {navigate("/Home")}}
/>
        <Box style={linstyle} >
        <Button           
        onClick={() => {navigate("/AccountPage")}}
         size="large"
         variant="outlined"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         color="inherit"
         >
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
        Account
        </Typography>
        </Button>
        </Box>
        <Box style={linstyle} sx={{ '& button': { m: 2 } }}>
        <Button
         size="large"
         variant="outlined"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         color="inherit"
         >
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
        About Us
        </Typography>
        </Button>
        </Box>
        <Box style={linstyle} sx={{ '& button': { m: 2 } }}>
        <Button
        onClick={() => {navigate("/HopeCenterAddress")}}
         size="large"
         variant="outlined"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         color="inherit"
         >
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
        Location
        </Typography>
        </Button>
        </Box>
        <Box style={linstyle} sx={{ '& button': { m: 2 } }}>
        <Button
         size="large"
         variant="outlined"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         color="inherit"
         >
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
        Contact Us
        </Typography>
        </Button>
        </Box>
        <img src="https://www.newcastlede.gov/ImageRepository/Document?documentID=46217" height={400} width={600} alt="HopeCenter" />
        </CardContent>
        <CardActions>
        </CardActions>
        </Card>
        <Button variant="contained" size="large" startIcon={<SettingsIcon />} color="inherit" sx={{display: {xs: "block", sm:"none"}}} />
        <img src="https://hopecenters.net/wp-content/uploads/2018/10/Hope-Center-Logo.png" height={100} width={125} alt="HopeCenter" />
        </Stack>
        </Box>
        <Box style={boxstyle}>
        <Button
         size="large"
         variant="outlined"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         color="inherit"
         sx={{mt:4, mb:4, display: {xs: "block", sm:"none"}}}
         >
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
        Account
        </Typography>
        </Button>
        </Box>
        <Box style={boxstyle}>
        <Button
         size="large"
         variant="outlined"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         color="inherit"
         sx={{mt:4, mb:4 ,display: {xs: "block", sm:"none"}}}
         >
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
        About Us
        </Typography>
        </Button>
        </Box>
        <Box style={boxstyle}>
        <Button
         size="large"
         variant="outlined"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         color="inherit"
         sx={{mt:4, mb:4 , display: {xs: "block", sm:"none"}}}
         >
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
        Location
        </Typography>
        </Button>
        </Box>
        <Box style={boxstyle}>
        <Button
         size="large"
         variant="outlined"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         color="inherit"
         sx={{mt:4, mb:4, display: {xs: "block", sm:"none"}}}
         >
        <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
        Contact Us
        </Typography>
        </Button>
        </Box>
      </div>
    );
  }
  export default SettingsP;
