import './App.css';
import LogFootprint from "./Pages/Diary/Diary";
import {NavLink, Route, Routes} from "react-router-dom";
import {Box, Snackbar} from "@mui/joy";
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
import Logo from './logo.png'

function App(props) {
    const pathname = window.location.pathname;
    const [settingsModalOpen, setSettingsModal] = useState(false)
    const [value, setValue] = React.useState(pathname);
    const gridContainer = {
        display: "grid",
        gridTemplateRows: "1fr 11fr 1fr",
        position: "relative"
    };


    const buttonStyle = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      };
    
      const imageStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover'
      };

      const fireMessages = [
              "Please stop poking the fire",
              "You will burn your hand!",
              "Nothing will happen if you press this button 100 times, I promise",
              "By poking the fire, you have introduced a breaking bug. Now we will have to spend valuable time to fix it. Thanks...",
              "Duck off",
              "In contrast to Duo, I will not kidnap your family, but I will kick your shins!",
              "If you keep burning yourself, you'll make a great sunday roast!"
      ]

    const [message, setMessage] = useState("")

    const handleStreakCLick = () => {
        if(Math.floor(Math.random() * 5) === 0){
            setMessage(fireMessages[Math.floor(Math.random() * fireMessages.length)])
            setOpen(true);
        }
    }

    const [open, setOpen] = React.useState(false);
    const duration = 5000;

    const [left, setLeft] = React.useState();
    const timer = React.useRef();
    const countdown = () => {
        timer.current = window.setInterval(() => {
            setLeft((prev) => (prev === undefined ? prev : Math.max(0, prev - 100)));
        }, 100);
    };
    React.useEffect(() => {
        if (open && duration !== undefined && duration > 0) {
            setLeft(duration);
            countdown();
        } else {
            window.clearInterval(timer.current);
        }
    }, [open, duration]);

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
                                <IconButton style={{border: '3px orange solid'}} variant="outlined" edge="start" color="warning" aria-label='flame' onClick={() => handleStreakCLick()}>
                                    <WhatshotIcon color="orange" />
                                </IconButton>
                                <Typography style={{marginLeft: '5px'}} variant="title-md" color="orange"><b>25</b></Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={8} />

                        <Grid item xs={2}>
                            <IconButton style={buttonStyle} edge="start" color="inherit" aria-label='duck_pic' onClick={() => setSettingsModal(true)}>
                                <img src={Logo} style={imageStyle} alt='duck_pic' />
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
        <Snackbar
            variant="soft"
            color="warning"
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            autoHideDuration={duration}
            resumeHideDuration={left}
            onUnmount={() => setLeft(undefined)}
            open={open}
            onClose={(event, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setOpen(false);
            }}
            sx={{ position: "absolute" }}
        >
            {message}
        </Snackbar>
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
