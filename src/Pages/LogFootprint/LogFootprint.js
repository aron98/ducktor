import {Box} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {IconButton, Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from '@mui/icons-material/Add';

const LogFootprint = () => {
    const footprints = [
        {
            name: "Travel 3km by bus",
            footprint: 3
        },
        {
            name: "Using hair dryer for 30 minutes",
            footprint: 8
        }
    ];
    const savings = [
        {
            name: "Donate to plant 5 trees",
            footprint: 0.5
        }
    ];
    return (
        <Box>
            <Box p={1}>
                <Paper>
                    <Box p={1}>
                        <Typography level="title-md" textAlign="left">Remaining</Typography>
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography>10kg</Typography>
                                <Typography level="body-xs">Limit</Typography>
                            </Grid>
                            <Grid item xs={1}>-</Grid>
                            <Grid item xs={2}>
                                <Typography>8kg</Typography>
                                <Typography level="body-xs">Footprint</Typography>
                            </Grid>
                            <Grid item xs={1}>+</Grid>
                            <Grid item xs={2}>
                                <Typography>0.5kg</Typography>
                                <Typography level="body-xs">Saved</Typography>
                            </Grid>
                            <Grid item xs={1}>=</Grid>
                            <Grid item xs={3}>
                                <Typography>2.5kg</Typography>
                                <Typography level="body-xs">Remaining</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Box>
            <Box p={1}>
                <Paper>
                    <Box p={1}>
                        <Grid container>
                            <Grid item xs={10}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    minHeight="100%"
                                >
                                    <Typography level="title-md" textAlign="left">Footprint</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton aria-label="add">
                                    <AddIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Box p={1}>
                            <Paper elevation={0}>
                                {footprints.map(footprint => {
                                    return (
                                        <Box p={1}>
                                            <Grid container>
                                                <Grid item xs={10}><Typography level="title-xs" textAlign="left">{footprint.name}</Typography></Grid>
                                                <Grid item xs={2}><Typography level="body-xs" textAlign="left">{footprint.footprint}kg</Typography></Grid>
                                            </Grid>
                                        </Box>
                                    )
                                })}
                            </Paper>
                        </Box>

                    </Box>
                </Paper>
            </Box>
            <Box p={1}>
                <Paper>
                    <Box p={1}>
                        <Grid container>
                            <Grid item xs={10}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    minHeight="100%"
                                >
                                    <Typography level="title-md" textAlign="left">Saving the planet</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton aria-label="add">
                                    <AddIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Box p={1}>
                            <Paper elevation={0}>
                                {savings.map(saving => {
                                    return (
                                        <Box p={1}>
                                            <Grid container>
                                                <Grid item xs={10}><Typography level="title-xs" textAlign="left">{saving.name}</Typography></Grid>
                                                <Grid item xs={2}><Typography level="body-xs" textAlign="left">{saving.footprint}kg</Typography></Grid>
                                            </Grid>
                                        </Box>
                                    )
                                })}
                            </Paper>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default LogFootprint;