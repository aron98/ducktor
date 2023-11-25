import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Grid from '@mui/material/Grid'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container> 
          <Grid item xs={2}>
          <IconButton edge="start" color="inherit" aria-label='flame'>
            <WhatshotIcon />
          </IconButton>
          </Grid>
          
          <Grid item xs={8}> 
          <Typography variant="h6">Ducktor</Typography>
          </Grid>
          
          <Grid item xs={2}>
          <IconButton edge="start" color="inherit" aria-label='flame'>
            <SettingsIcon />
          </IconButton>
          </Grid>        
        </Grid>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;