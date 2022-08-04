import React from 'react'; 
import Paper from '@mui/material/Paper';
import { Box, Typography, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/*import hopeCenterLogo from '/workspace/mulan-hope-center/reset-password/src/Components/Hope-Center-Logo.png';*/

function SignUp() {
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
        <Box width style={boxstyle} fullWidth > 

        < Paper elevation={24} sx={{height: 900, width: 450, background:"#3449B5"}}>

        <Typography variant='h3' sx={{textAlign: "center", color: "#FFFFFF", fontWeight: 700}} >
            Sign Up
        </Typography>

        <Typography variant='h6' sx={{textAlign: "justify", color: "#FFFFFF", fontWeight: 500}} mt={3}>
            First Name:
        </Typography>

        <TextField
          placeholder='John'
          sx={{mt:1, background:"#FFFFFF",borderRadius:'50px', align:"center", width:330, height:30}}
          InputProps={{ style: { fontSize: 27, align: "center", width:330, height:30, borderRadius:'50px' } }}
          InputLabelProps={{ style: { fontSize: 27, align: "center" } }}
        />

        <Typography variant='h6' sx={{textAlign: "justify", color: "#FFFFFF", fontWeight: 500}} mt={3}>
            Last Name:
        </Typography>

          <TextField
          placeholder='Doe'
          sx={{mt:1, background:"#FFFFFF",borderRadius:'50px', align:"center", width:330, height:30}}
          InputProps={{ style: { fontSize: 27, align: "center", width:330, height:30, borderRadius:'50px' } }}
          InputLabelProps={{ style: { fontSize: 27, align: "center" } }}
          />

        <Typography variant='h6' sx={{textAlign: "justify", color: "#FFFFFF", fontWeight: 500}} mt={3}>
            Email:
        </Typography>

        <TextField
          placeholder='ex: john@gmail.com'
          sx={{mt:1, background:"#FFFFFF",borderRadius:'50px', align:"center", width:330, height:30}}
          InputProps={{ style: { fontSize: 27, align: "center", width:330, height:30, borderRadius:'50px' } }}
          InputLabelProps={{ style: { fontSize: 27, align: "center" } }}
        />

        <Typography variant='h6' sx={{textAlign: "justify", color: "#FFFFFF", fontWeight: 500}} mt={3}>
            Phone Number:
        </Typography>

        <TextField
          placeholder='ex: 123-234-3425'
          sx={{mt:1, background:"#FFFFFF",borderRadius:'50px', align:"center", width:330, height:30}}
          InputProps={{ style: { fontSize: 27, align: "center", width:330, height:30, borderRadius:'50px' } }}
          InputLabelProps={{ style: { fontSize: 27, align: "center" } }}
        />

        <Typography variant='h6' sx={{textAlign: "justify", color: "#FFFFFF", fontWeight: 500}} mt={3}>
            Select Which Role Applies To You Best:
        </Typography>

        <select>
            <option selected value="Select Role">Select Role</option>
            <option value="Individual Doner">Individual Doner</option>
            <option value="Organization Doner">Organization Doner</option>
            <option value="Hope Center Employee">Hope Center Employee</option>
        </select>

        <Typography variant='h6' sx={{textAlign: "justify", color: "#FFFFFF", fontWeight: 500}} mt={3}>
            Password:
        </Typography>

        <TextField
          placeholder='●●●●●●●●'
          sx={{mt:1, background:"#FFFFFF",borderRadius:'50px', align:"center", width:330, height:30}}
          InputProps={{ style: { fontSize: 27, align: "center", width:330, height:30, borderRadius:'50px' } }}
          InputLabelProps={{ style: { fontSize: 27, align: "center" } }}
        />

        <Typography variant='h6' sx={{textAlign: "justify", color: "#FFFFFF", fontWeight: 500}} mt={3}>
            Confirm Password:
        </Typography>

        <TextField
          placeholder='●●●●●●●●'
          sx={{mt:1, background:"#FFFFFF",borderRadius:'50px', align:"center", width:330, height:30}}
          InputProps={{ style: { fontSize: 27, align: "center", width:330, height:30, borderRadius:'50px' } }}
          InputLabelProps={{ style: { fontSize: 27, align: "center" } }}
        />

        <Box mt={5} sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button
            sx={{borderRadius: "500px", 
            backgroundColor:"primary.main", 
            color:"black", 
            width:250,
            height:60, 
            background:"#FFFFFF" }}
            
            >
              Submit
            </Button>
          </Box>

        </Paper>
        </Box>
        </ThemeProvider>
    );
} 

export default SignUp;
