import {Box, Card} from "@mui/joy";
import Grid from "@mui/material/Grid";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import LinearProgressBar from "../../Components/LinearProgressBar/LinearProgressBar";
import treeBadge from "./tree.png"
import binBadge from "./bin.png"
import celebrateBadge from "./celebrate.png"

const Community = (props) => {
    return (
        <Box>
            <Box p={1}>
                <Card>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <img alt="november badge" src={treeBadge} width="100%" style={{borderRadius: 100, border: "2px solid orange"}} />
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
                                    <Typography level="title-lg">CraftHub Tree Challenge</Typography>
                                    <Typography level="Body-lg">Lets reduce our emission together by planting 100 trees.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <LinearProgressBar value={66} />
                </Card>
            </Box>
            <Box p={1}>
                <Card>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <img alt="november badge" src={binBadge} width="100%" style={{borderRadius: 100, border: "2px solid orange"}} />
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
                                    <Typography level="title-lg">Neighborhood Recycling Challenge</Typography>
                                    <Typography level="Body-lg">Give back to the planet and the community by recycling.</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <LinearProgressBar value={30} />
                </Card>
            </Box>
            <Box p={1}>
                <Card>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <img alt="november badge" src={celebrateBadge} width="100%" style={{borderRadius: 100, border: "2px solid orange"}} />
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
                                    <Typography level="title-lg">Congratulate <b>James Pond</b>!</Typography>
                                    <Typography level="Body-lg">They just reached 365 🔥</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Box>
    );
}

export default Community