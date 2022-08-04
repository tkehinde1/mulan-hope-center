import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;import React from "react";
import { Box, Card, CardActions, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function DonationPage() {
  let navigate = useNavigate();

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
      <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
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
      <FormControlLabel value="box" control={<Radio />} label="Box" />
      </RadioGroup>
      </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Item being donated '
        sx={{mt: 2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}
        helperText="*Be as specific as possible"
        />
        </Box>
        <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Size'
        sx={{mt:2, mb:2, background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Quantity'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
      <Box style={boxstyle}>
      <TextField
        variant="filled"
        placeholder='Brand'
        sx={{mt:2, mb:2 , background:"#F4E8A7"}}
        InputProps={{ style: { fontSize: 24 } }}
        InputLabelProps={{ shrink: true, style: { fontSize: 24 } }}/>
        </Box>
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
  export default DonationPage;
