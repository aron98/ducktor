import './App.css';
import LogFootprint from "./Pages/Diary/Diary";
import {NavLink, Route, Routes} from "react-router-dom";
import {Box} from "@mui/joy";
import {BottomNavigation, BottomNavigationAction, IconButton} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ForumIcon from "@mui/icons-material/Forum";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import AppBar from "@mui/material/AppBar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Feed from './Pages/Feed/Feed'; 
import SettingsModal from "./Components/SettingsModal/SettingsModal";
import {useState} from "react";
import {UPDATE_SETTINGS} from "./Redux/actions";
import {connect} from "react-redux";
import Profile from "./Pages/Profile/Profile";
import Community from "./Pages/Community/Community";

function App(props) {
    const pathname = window.location.pathname;
    const [settingsModalOpen, setSettingsModal] = useState(false)
    const [value, setValue] = React.useState(pathname);
    const gridContainer = {
        display: "grid",
        gridTemplateRows: "1fr 11fr 1fr"
    };

  return (
    <Box className="App" sx={gridContainer}>
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={2}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <IconButton edge="start" color="warning" aria-label='flame'>
                                    <WhatshotIcon color="orange" />
                                </IconButton>
                                <Typography variant="title-md" color="orange"><b>25</b></Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={8} />

                        <Grid item xs={2}>
                            <IconButton edge="start" color="inherit" aria-label='flame' onClick={() => setSettingsModal(true)}>
                                <Typography variant="h4">🦆</Typography>
                            </IconButton>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </Box>
        <Box p={2} className="content">
            <Routes>
                <Route path="/" element={(
                    <Dashboard />
                )} />
                <Route path="/diary" element={(
                    <LogFootprint />
                )} />
                <Route path="/feed" element={(
                    <Feed />
                )} />
                <Route path="/community" element={(
                    <Community />
                )} />
                <Route path="/profile" element={(
                    <Profile />
                )} />
            </Routes>
        </Box>
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                style={{borderTop: "1px solid #dadada"}}
                sx={{ maxWidth: "390px", bgcolor: "#eaeaea", minHeight: "100%"}}
            >
                <BottomNavigationAction sx={{ minWidth: "70px" }} label="Dashboard" icon={<DashboardIcon />} component={NavLink} to="/" value="/" />
                <BottomNavigationAction sx={{ minWidth: "70px" }} label="Diary" icon={<LocalLibraryIcon />} component={NavLink} to="/diary" value="/diary"  />
                <BottomNavigationAction sx={{ minWidth: "70px" }} label="Feed" icon={<ForumIcon />} component={NavLink} to="/feed" value="/feed"  />
                <BottomNavigationAction sx={{ minWidth: "70px" }} label="Community" icon={<PeopleIcon />} component={NavLink} to="/community" value="/community"  />
                <BottomNavigationAction sx={{ minWidth: "70px" }} label="Profile" icon={<PersonIcon />} component={NavLink} to="/profile" value="/profile"  />
            </BottomNavigation>
        </Box>
        <SettingsModal open={settingsModalOpen} close={() => setSettingsModal(false)} submit={(settings) => props.updateSettings(settings)} initialState={props.settings} />
    </Box>
  );
}

const mapStateToProps = (state) => ({
    settings: state.settingsReducer,
    activeStreak: true
})

const mapDispatchToProps = (dispatch) => ({
    updateSettings: (settings) => dispatch({type: UPDATE_SETTINGS, data: settings})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
