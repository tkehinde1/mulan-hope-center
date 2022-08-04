import { Box, Card, CardActions, CardContent, Stack, Typography, FormControlLabel} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    direction: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}
function DonationP() {
  let navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    // :point_down:️ toggle shown state
    setIsShown(current => !current);
    // :point_down:️ or simply set it to true
    setIsShown(true);
  };
    return (
        <ThemeProvider  theme={ButtonTheme}>
        <Box backgroundColor= "#3449B5" fullWidth>
            <Stack direction= "row" spacing= "2" justifyContent="space-between" background= "#3449B5">
                <Button onClick={() => {navigate("/Home")}} variant="contained" size="Small" startIcon={<ArrowBackIcon/>}>Back</Button>
                <img src="https://hopecenters.net/wp-content/uploads/2018/10/Hope-Center-Logo.png" height={100} width={125} alt="HopeCenter"/>
            </Stack>
        </Box>
        <div>
        <Box style={boxstyle}>
        <Card style={{backgroundColor: '#FFFFFF'}} sx={{margin:1}}>
        <CardContent theme={ButtonTheme}>
        <Typography variant='h3' sx={{textAlign: 'center', color:"#3449B5", fontWeight: 600}} mt={2} mb={2}>
            Donate Items
        </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
        </Card>
        </Box>
        <Box style={boxstyle}>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        row
      >
        <FormControlLabel value="individual item" control={<Radio />} label="Individual Item" />
        <FormControlLabel value="box" control={<Radio />} label="Box" onClick={handleClick} />
        </RadioGroup>
        </Box>
        <Box style={boxstyle}>
        <TextField
          variant="filled"
          placeholder='Item/s being donated '
          sx={{mt: 2, mb:2, background:"#FFFFFF"}}
          InputProps={{ style: { fontSize: 24 } }}
          InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
          helperText="*Be as specific as possible"
          />
          </Box>
        <Box style={boxstyle}>
        <TextField
          variant="filled"
          placeholder='Quantity'
          sx={{mt:2, mb:2 , background:"#FFFFFF"}}
          InputProps={{ style: { fontSize: 24 } }}
          InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
          </Box>
        <Box style={boxstyle}>
        <TextField
          variant="filled"
          placeholder='Brand'
          sx={{mt:2, mb:2 , background:"#FFFFFF"}}
          InputProps={{ style: { fontSize: 24 } }}
          InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
          </Box>
          {isShown && (
        <Box style={boxstyle}>
            <TextField
          variant="filled"
          placeholder='Number of Boxes'
          sx={{mt:2, mb:2 , mr:2, ml:2, background:"#FFFFFF"}}
          InputProps={{ style: { fontSize: 24 } }}
          InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
            <TextField
          variant="filled"
          placeholder='Count size inside Box'
          sx={{mt:2, mb:2, ml:2, background:"#FFFFFF"}}
          InputProps={{ style: { fontSize: 24 } }}
          InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
            </Box>
      )}
      {/* :point_down:️ show component on click */}
      {isShown && <Box />}
          <Box style={boxstyle} sx={{ '& button': { m: 2 } }}>
        <Button
         size="large"
         variant="contained"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         >Item Wishlist</Button>
        <Button
         size="large"
         variant="contained"
         href=""
         target="_blank"
         rel="noopener noreferrer"
         margin= "0 10px"
         >Submit Donation</Button>
        </Box>
      </div>
      </ThemeProvider>
    );
  }
  export default DonationP;
