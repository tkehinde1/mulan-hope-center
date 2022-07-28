import React from "react";
import { Box, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import ButtonTheme from './ButtonTheme'
import { ThemeProvider } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const boxstyle = {
    background: "#3449B5",
    display: 'flex',
    flexdirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'center',
}

function HomePage() {
    return (
            <ThemeProvider  theme={ButtonTheme}>
            <Box backgroundColor= "#3449B5" fullWidth>
                <Stack direction= "row" spacing= "2" justifyContent="space-between" background= "#3449B5">
                    <Button variant="contained" size="large" startIcon={<SettingsIcon />}/>
                    <img src="https://hopecenters.net/wp-content/uploads/2018/10/Hope-Center-Logo.png" height={100} width={125} alt="HopeCenter"/>
                </Stack>
            </Box>
            <div>
            <Box style={boxstyle} sx={{ '& button': { m: 2 } }}>
            <Button
             size="large"
             variant="contained"
             href=""
             target="_blank"
             rel="noopener noreferrer"
             margin= "0 10px"
             >
            <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 600}}>
            Help Us Today
            </Typography>
            </Button>
            </Box>
            <Box style={boxstyle}>
            <Card style={{backgroundColor: '#F4E8A7'}} sx={{margin:1}}>
            <CardContent theme={ButtonTheme}>
            <Typography variant='h5' sx={{textAlign: 'center', fontWeight: 400}}>
                The Hope Center is a nonprofit shelter looking
                to offer resources to whoever may need.
            </Typography>        
            </CardContent>
            <CardActions>
            </CardActions>
            </Card>
            </Box>
            <Box style={boxstyle}>
            <img src="https://www.newcastlede.gov/ImageRepository/Document?documentID=46217" height={400} width={600} alt="HopeCenter"/>
            </Box>
          </div>
          </ThemeProvider>
    );
  }
  export default HomePage;