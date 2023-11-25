import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SettingsIcon from '@mui/icons-material/Settings';
import './Footer.css'

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
          <Tab icon={<SettingsIcon />} aria-label="phone" />
          <Tab icon={<SettingsIcon />} aria-label="phone" />
          <Tab icon={<SettingsIcon />} aria-label="phone" />
        </Tabs>
      </AppBar>
  );
}