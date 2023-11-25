import {Box, Card} from "@mui/joy";
import CircularProgressCountUp from "../../Components/CircularProgressCountUp/CircularProgressCountUp";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Co2Icon from '@mui/icons-material/Co2';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import FactoryIcon from '@mui/icons-material/Factory';

const Dashboard = (props) => {
    return (
        <Box>
            <Typography variant="h5">Today</Typography>
            <Card>
                <Typography variant="h6" align="left">Carbon footprint</Typography>
                <Typography variant="caption" align="left">Remaining = Limit - Spent + Saved</Typography>
                <Grid container>
                    <Grid item xs={8}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            minHeight="100%"
                        >
                            <CircularProgressCountUp />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box p={1}>
                            <Grid container justifyContent="center">
                                <Grid item xs={4}>
                                    <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    minHeight="100%"
                                    >
                                        <Co2Icon />
                                    </Box>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="caption">Limit<br/><b>10kg</b></Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Grid container justifyContent="center">
                                <Grid item xs={4}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        minHeight="100%"
                                    >
                                        <FactoryIcon />
                                    </Box>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="caption">Footprint<br/><b>8kg</b></Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Grid container justifyContent="center">
                                <Grid item xs={4}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        minHeight="100%"
                                    >
                                        <EnergySavingsLeafIcon />
                                    </Box>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="caption">Saved<br/><b>0.5kg</b></Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}

export default Dashboard;