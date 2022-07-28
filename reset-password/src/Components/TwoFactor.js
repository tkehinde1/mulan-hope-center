import { Button, TextField, Typography, Toolbar, Grid, ImageList, ImageListItem, Link, Box, } from '@mui/material'
import * as React from 'react'
import styled from '@emotion/styled';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Container } from '@mui/system';


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

function TwoFactor() {
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
      />

      </IconToolbar>

    <Typography variant="h6" align = "center" color="white" fontSize={20}>
      Each time you log in using a new device, you will be asked to enter a verification code.
      </Typography>

      <StyledToolbar>
      <MailIcon/>
    
    <Typography color="white">Email</Typography>
      </StyledToolbar>

<Container maxWidth="sm">
    <StyledToolbar>

   <ThemeProvider theme={themeTextField}>
    <TextField id="standard-basic" label="Email address here" variant="standard" align = "center" fullWidth  inputProps={{ style: { color: "white" } }}/>
    </ThemeProvider>
    
    <ThemeProvider theme={theme}>
        <Button color="neutral" variant="contained">
           Submit
        </Button>
      </ThemeProvider>
    </StyledToolbar>
    </Container>

    <StyledToolbar>
      <PhoneIphoneIcon/>
    
      <Typography color="white">Authenticator App</Typography>

    </StyledToolbar>

    {/* <Typography align = "center" color="white">Scan QR Code:</Typography> */}
    
    <Grid align = "center">
    <ImageList sx={{ width: 350, height: 350 }} cols={1} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Grid>

{/* <img className="photo" src="images/qrcode.png"/> */}

    <Link href="#" fontSize={21} display= "flex" justifyContent= "center" underline="always" sx={{color: '#F4E8A7'}}>
    Remind Me Later
    </Link>

    

    </Box>

    </div>

  )
}

export default TwoFactor;
