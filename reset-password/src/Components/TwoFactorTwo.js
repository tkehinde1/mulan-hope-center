import { Button, TextField, Typography, Toolbar, Grid, ImageList, ImageListItem, Link, Box, } from '@mui/material'
import * as React from 'react'
import styled from '@emotion/styled';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Container } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#F4E8A7',
      contrastText: 'black',
    },
  },
}); 

const themeTextField = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '',
          '&.Mui-disabled': {
            backgroundColor: '#ffffff',
          },
        },
      },
    },
  },
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  gap: "10px"
 });

 const IconToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px"
 });

 const itemData = [
  {
    display: "flex",
    alignItems: "right",
    justifyContent: "center",
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
  },
]

function TwoFactorTwo() {
  return (
    
    <div
        style={{
        display: 'flex',
      }}
    >
      <Box
      sx={{
        background: "#3449B5",
        width: 1650,
        height: 755,
      }}
     >

      
      <IconToolbar>

      <Link href="#" fontSize={21} underline="always" sx={{color: '#F4E8A7'}}>
      Back
    </Link>

    <Typography variant="h6" align='center' color="white" fontSize={55}>
    2FA
      </Typography>

      <img
      src='https://i.imgur.com/mNCgw20.png'
      alt='Hope Center Logo'
      className='img'
      />

      </IconToolbar>

    <Typography variant="h6" align = "center" color="white" fontSize={20}>
      Each time you log in using a new device, you will be asked to enter a verification code.
      </Typography>

      <StyledToolbar>
      <MailIcon sx={{ fontSize: 40 }}/>
    
    <Typography color="white" fontSize={25}>Email</Typography>

      <CloseIcon/>

      </StyledToolbar>


    <StyledToolbar>
      <PhoneIphoneIcon sx={{ fontSize: 40 }}/>
    
      <Typography color="white" fontSize={25}>Authenticator App</Typography>

      <CheckIcon/>

    </StyledToolbar>

    <Typography align = "center" color="white" marginTop={5} fontSize={18}>Enter Code from Email or Authenticator App:</Typography>
    
    {/* <Container maxWidth="sm">

    <ThemeProvider theme={themeTextField}>
    <TextField id="standard-basic" label="Verification Code"  margin="normal" variant="standard" align = "center" fullWidth inputProps={{ style: { color: "white" } }}/>
    </ThemeProvider>

      </Container> */}

      <StyledToolbar>
      <Box
      sx={{
        background: "#F4E8A7",
        width: 75,
        height: 75,
      }}
      />

<Box
      sx={{
        background: "#F4E8A7",
        width: 75,
        height: 75,
      }}
      />

<Box
      sx={{
        background: "#F4E8A7",
        width: 75,
        height: 75,
      }}
      />

<Box
      sx={{
        background: "#F4E8A7",
        width: 75,
        height: 75,
      }}
      />

<Box
      sx={{
        background: "#F4E8A7",
        width: 75,
        height: 75,
      }}
      />

<Box
      sx={{
        background: "#F4E8A7",
        width: 75,
        height: 75,
      }}
      />

      </StyledToolbar>

        <Grid align="center">

        <Box marginBottom={2}>
        <ThemeProvider theme={theme}>
        <Button color="neutral" variant="contained">
           Submit
        </Button>
      </ThemeProvider>
      </Box>

        </Grid>

      <Link href="#" fontSize={21} display= "flex" justifyContent= "center" underline="always" sx={{color: '#F4E8A7'}}>
    Change Verification Type
    </Link>

    </Box>

    </div>

  )
}

export default TwoFactorTwo;
