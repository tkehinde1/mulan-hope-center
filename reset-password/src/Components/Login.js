import  React,{useState} from 'react';
import { Box, Typography, Paper, Button, TextField, } from '@mui/material';
import logo from "./Hope-Center-Logo.png";
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();

    const StyledText = styled(TextField)({
      display: "flex",
      justify: "middle"
    })
    const boxstyle = {
        background: "#fffffff",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'center',
        flexWrap: 'wrap',
        height: '242',
    }
    return(
    <Box style={boxstyle} fullWidth >
        <Paper elevation={24} sx={{height: 1166, width: 724, background:"#3448B5", borderRadius: "50px"}}>
          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img src={logo} alt="Hope Center Logo" align="center" width="532" height="242"/>
          </Box>
          {/* <Typography variant='h3' sx={{textAlign: 'center', color:"#3449B5", fontWeight: 600}} mb={5}>
            Login
          </Typography> */}
          <Typography variant='h6' sx={{textAlign: 'left', fontSize: '36px', color: '#D8DBDE', marginLeft: 3}} mt={3}>
            Username:
          </Typography>
          <TextField
           variant="filled"
           placeholder='Username Here'
           sx={{mt:0.5, marginLeft: 2, background:"#D8DBDE", borderRadius:'80px', color:'black', width:'692px', }}
           InputProps={{ style: { fontSize: 36} }}
           InputLabelProps={{ style: { fontSize: 36 } }}
      />

          <Typography variant='h6' sx={{textAlign: 'left', fontSize: '36px', color: '#D8DBDE', marginLeft: 3}} mt={10}>
            Password:
          </Typography>


          
          
          <StyledText
          type="Password"
          variant="filled"
          fullWidth
          placeholder='Password Here'
          sx={{mt:0.5, marginLeft: 2, background:"#D8DBDE", borderRadius:'80px', color:'black', width:'692px', }}
          InputProps={{ style: { fontSize: 36 } }}
          InputLabelProps={{ style: { fontSize: 36 } }}
            />          
    

          <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button onClick={() => {navigate("/Home")}} sx={{borderRadius: "500px", backgroundColor:'#D8D8DE', color:'#0D0D0E', width:280 ,height:100, fontSize: '18px' }}>
              Login
            </Button>
          </Box>
          <Box  mt={10} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Button onClick={() => {navigate("/EnterInfo")}} sx={{borderRadius: "500px", backgroundColor:'#D8D8DE', color:'#0D0D0E', width:280, height:100,  fontSize: '18px', marginRight: 3 }}>
              Forgot Password
            </Button>
            <Button onClick={() => {navigate("/SignUp")}} sx={{ display:"flex", borderRadius: "500px", backgroundColor:'#D8D8DE', color:'#0D0D0E', width:280, height:100, justify: "space-evenly", fontSize: '18px', marginLeft: 3 }}>
              Sign Up
            </Button>
          </Box>
        </Paper>
    </Box>
    );
}
export default Login;



