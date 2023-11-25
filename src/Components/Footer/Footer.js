import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SettingsIcon from '@mui/icons-material/Settings';
import './Footer.css'
import {Link} from "react-router-dom";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <AppBar >
        <Tabs
          className="footer"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab icon={<SettingsIcon />} component={Link} to="/" aria-label="tab icon" />
          <Tab icon={<SettingsIcon />} component={Link} to="/statistics" aria-label="tab icon" />
          <Tab icon={<SettingsIcon />} component={Link} to="/leaderboard" aria-label="tab icon" />
        </Tabs>
      </AppBar>
  );
}