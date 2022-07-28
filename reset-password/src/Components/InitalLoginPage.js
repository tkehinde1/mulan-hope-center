import React from "react";
import { Box, Card, CardActions, CardContent} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';

const boxstyle = {
  background: "#3449B5",
  display: 'flex',
  flexdirection: "column",
  alignItems: 'center',
  justifyContent: 'center',
  position: 'center',
}

function InitalLoginPage() {
  return (
    <ThemeProvider  theme={ButtonTheme}>
      <Box style={boxstyle} sx={{ '& button': { m: 4.6 } }}>
    <div>
    <Box style={boxstyle}>
      <img src="https://hopecenters.net/wp-content/uploads/2018/10/Hope-Center-Logo.png" height={180} width={255} alt="HopeCenter"/>
      </Box>
      <Box style={boxstyle}>
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
      <CardContent theme={ButtonTheme}>
      Welcome to the Hope Center
      </CardContent>
      <CardActions>
      </CardActions>
      </Card>
      </Box>
      <Box style={boxstyle}>
      <Button
       size="large"
       variant="contained"
       href=""
       target="_blank"
       rel="noopener noreferrer"
       margin= "0 10px"
       >Individual Donor</Button></Box>
          <Box style={boxstyle}>
      <Button
       size="large"
       variant="contained"
       margin= "0 10px"
       href=""
       target="_blank"
       rel="noopener noreferrer"
       >Organization Donor</Button>
      </Box>
      <Box style={boxstyle}>
      <Button
        size="large"
        variant="contained"
        href=""
        target="_blank"
        rel="noopener noreferrer"
        margin= "0 10px"
        >Hope Center Employee</Button>
        </Box>
    </div>
    </Box>
    </ThemeProvider>
  );
}
export default InitalLoginPage;