import {Box, Card, Divider} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {connect} from "react-redux";
import Grid from "@mui/material/Grid";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import IsoIcon from '@mui/icons-material/Iso';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import avatar from './cap_quack.webp'
import novBadge from './nov_badge.webp'
import augustBadge from './augustBadge.png'
import * as React from "react";
import ShareButtons from "../../Components/Sharing/ShareButtons";

const Profile = (props) => {
    const footprintBase = 342.5
    const reductionBase = 350.4
    return (
        <Box>
            <Box p={1}>
                <Card>
                    <Grid container>
                        <Grid item xs={6}>
                            <Box
                                display="flex"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <Typography textAlign="left" variant="body-title-md">
                                    <b>{props.name}</b>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="end"
                                minHeight="100%"
                            >
                                <img alt="avatar" src={avatar} width="40%" style={{borderRadius: 100, border: "2px solid black"}} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}><Typography variant="body-title-md">
                            You are officially 🦆-ing Good
                        </Typography></Grid>
                    </Grid>
                    <ShareButtons url='https://junction.aronerdelyi.hu/' size='32' title='Random'/>
                </Card>
            </Box>
            <Box p={1}>
                <Card>
                    <Typography textAlign="left">Statistics</Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Box p={1}>
                                <Card>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                minHeight="100%"
                                            >
                                                <AddCircleIcon color="success" />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography level="title-md" textAlign="left"><b>{reductionBase}kg</b></Typography>
                                            <Typography level="body-xs" textAlign="left">reduction</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box p={1}>
                                <Card>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                minHeight="100%"
                                            >
                                                <RemoveCircleIcon color="error" />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography level="title-md" textAlign="left"><b>{footprintBase}kg</b></Typography>
                                            <Typography level="body-xs" textAlign="left">footprint</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box p={1}>
                                <Card>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                minHeight="100%"
                                            >
                                                <IsoIcon color="primary" />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography level="title-md" textAlign="left"><b>{Number((footprintBase-reductionBase).toFixed(2))}kg</b></Typography>
                                            <Typography level="body-xs" textAlign="left">impact</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box p={1}>
                                <Card>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                minHeight="100%"
                                            >
                                                <WhatshotIcon color="warning"/>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography level="title-md" textAlign="left"><b>25</b></Typography>
                                            <Typography level="body-xs" textAlign="left">day streak</Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
            <Box p={1}>
                <Card>
                    <Typography textAlign="left">Earned Badges</Typography>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <img alt="november badge" src={novBadge} width="100%" style={{borderRadius: 100, border: "2px solid orange"}} />
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <Box display="block" p={1}>
                                    <Typography level="title-lg">November badge</Typography>
                                    <Typography level="Body-lg">Log your days continuously for at least 15 days</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                                <Box p={1}>
                                    <Divider variant="middle" />
                                </Box>
                            </Grid>
                        <Grid item xs={3}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <img alt="november badge" src={augustBadge} width="100%" style={{borderRadius: 100, border: "2px solid orange"}} />
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <Box display="block" p={1}>
                                    <Typography level="title-lg">August badge</Typography>
                                    <Typography level="Body-lg">Meatless Mondays this month. Winner winner no duck dinner!</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Box>
    );
}

const mapStateToProps = state => ({
    name: state.settingsReducer.name
})

export default connect(mapStateToProps)(Profile);