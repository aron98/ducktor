import {Box, Card} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {IconButton} from "@mui/material";
import Grid from "@mui/material/Grid";
import AddIcon from '@mui/icons-material/Add';
import {connect} from "react-redux";
import isToday from "../../Utilities/IsToday";
import FootprintModal from "../../Components/FootprintModal/FootprintModal";
import {useState} from "react";
import {ADD_FOOTPRINT, ADD_SAVING, REMOVE_FOOTPRINT, REMOVE_SAVING} from "../../Redux/actions";
import RemoveIcon from '@mui/icons-material/Remove';
import SavingModal from "../../Components/SavingModal/SavingModal";
import LinearProgressBar from "../../Components/LinearProgressBar/LinearProgressBar";

const Diary = (props) => {
    const [footprintModalOpen, setFootprintModal] = useState(false)
    const [savingModalOpen, setSavingModal] = useState(false)
    const footprintSum = props.todaysFootprints.map(footprint => footprint.footprint).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);
    const savingSum = props.todaysSavings.map(saving => saving.saving).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);

    return (
        <Box>
            <Box p={1}>
                <Card>
                    <Typography level="title-md" textAlign="left">Remaining</Typography>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography>{Number(props.limit.toFixed(2))}kg</Typography>
                            <Typography level="body-xs">Limit</Typography>
                        </Grid>
                        <Grid item xs={1}>-</Grid>
                        <Grid item xs={2}>
                            <Typography>{Number(footprintSum.toFixed(2))}kg</Typography>
                            <Typography level="body-xs">Footprint</Typography>
                        </Grid>
                        <Grid item xs={1}>+</Grid>
                        <Grid item xs={2}>
                            <Typography>{Number(savingSum.toFixed(2))}kg</Typography>
                            <Typography level="body-xs">Saved</Typography>
                        </Grid>
                        <Grid item xs={1}>=</Grid>
                        <Grid item xs={3}>
                            <Typography>{Number((props.limit-footprintSum+savingSum).toFixed(2))}kg</Typography>
                            <Typography level="body-xs">Remaining</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
            <Box p={1}>
                <Card>
                    <LinearProgressBar value={100 * (footprintSum - savingSum) / props.limit} />
                </Card>
            </Box>
            <Box p={1}>
                <Card>
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
                            <Box
                                display="flex"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <IconButton aria-label="add" onClick={() => setFootprintModal(true)}>
                                    <AddIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box>
                        {props.footprints.map((footprint, idx) => ({
                            ...footprint,
                            idx: idx
                        })).filter(footprint => isToday(new Date(footprint.date))).map(footprint => {
                            return (
                                <Box key={footprint.idx}>
                                    <Grid container>
                                        <Grid item xs={8}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                minHeight="100%"
                                            >
                                                <Typography level="title-xs" textAlign="left">{footprint.name}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                minHeight="100%"
                                            >
                                                <Typography level="body-xs" textAlign="left">{footprint.footprint}kg</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                minHeight="100%"
                                            >
                                                <IconButton variant="plain" onClick={() => props.removeFootprint(footprint.idx)}>
                                                    <RemoveIcon />
                                                </IconButton>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                )
                            })}
                        </Box>
                </Card>
            </Box>
            <Box p={1}>
                <Card>
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
                            <Box
                                display="flex"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <IconButton aria-label="add" onClick={() => setSavingModal(true)}>
                                    <AddIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box>
                        <Box elevation={0}>
                            {props.savings.map((saving, idx) => ({
                                ...saving,
                                idx: idx
                            })).filter(saving => isToday(new Date(saving.date))).map((saving, idx) => {
                                return (
                                    <Box key={idx}>
                                        <Grid container>
                                            <Grid item xs={8}>
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                    minHeight="100%"
                                                >
                                                    <Typography level="title-xs" textAlign="left">{saving.name}</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                    minHeight="100%"
                                                >
                                                    <Typography level="body-xs" textAlign="left">-{saving.saving}kg</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                    minHeight="100%"
                                                >
                                                    <IconButton variant="plain" onClick={() => props.removeSaving(saving.idx)}>
                                                        <RemoveIcon />
                                                    </IconButton>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </Card>
            </Box>
            <FootprintModal open={footprintModalOpen} close={() => setFootprintModal(false)} submit={(footprint) => props.addFootprint(footprint)} />
            <SavingModal open={savingModalOpen} close={() => setSavingModal(false)} submit={(saving) => props.addSaving(saving)} />
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        todaysFootprints: state.footprintReducer.footprints.filter(footprint => isToday(new Date(footprint.date))),
        todaysSavings: state.savingsReducer.savings.filter(saving => isToday(new Date(saving.date))),
        footprints: state.footprintReducer.footprints,
        savings: state.savingsReducer.savings,
        limit: state.settingsReducer.limit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFootprint: (footprint) => dispatch({ type: ADD_FOOTPRINT, data: footprint }),
        removeFootprint: (index) => dispatch({ type: REMOVE_FOOTPRINT, data: index }),
        addSaving: (saving) => dispatch({ type: ADD_SAVING, data: saving }),
        removeSaving: (index) => dispatch({ type: REMOVE_SAVING, data: index }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diary);