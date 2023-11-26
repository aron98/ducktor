import {Box, Card} from "@mui/joy";
import CircularProgressCountUp from "../../Components/CircularProgressCountUp/CircularProgressCountUp";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Co2Icon from '@mui/icons-material/Co2';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import FactoryIcon from '@mui/icons-material/Factory';
import {LineChart} from "@mui/x-charts";
import {connect} from "react-redux";
import isToday from "../../Utilities/IsToday";

const Dashboard = (props) => {
    const footprintSum = props.todaysFootprints.map(footprint => footprint.footprint).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
    const savingSum = props.todaysSavings.map(saving => saving.saving).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
    const footprintData = [12, 6, 10, 4, 7, 8];
    const savingData = [-4, 0, -3, -8, -5, -2];
    const xLabels = [
        '11.20',
        '11.21',
        '11.22',
        '11.23',
        '11.24',
        '11.25'
    ];

    return (
        <Box>
            {/*Today's Footprint*/}
            <Box p={1}>
                <Card>
                    <Typography variant="h6" align="left">Today's carbon footprint</Typography>
                    <Typography variant="caption" align="left">Remaining = Limit - Spent + Saved</Typography>
                    <Grid container>

                        {/*Circular progressbar*/}
                        <Grid item xs={8}>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                minHeight="100%"
                            >
                                <CircularProgressCountUp value={Number(100 * (footprintSum - savingSum) / props.limit)}/>
                            </Box>
                        </Grid>

                        {/*Side stats*/}
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
                                            <Co2Icon/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="caption">Limit<br/><b>{Number(Number(props.limit).toFixed(2))}kg</b></Typography>
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
                                            <FactoryIcon/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="caption">Footprint<br/><b>{Number(Number(footprintSum).toFixed(2))}kg</b></Typography>
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
                                            <EnergySavingsLeafIcon/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant="caption">Saved<br/><b>{Number(Number(savingSum).toFixed(2))}kg</b></Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
            
            {/*Graph plot*/}
            <Box p={1}>
                <Card>
                    <LineChart
                        width={300}
                        height={300}
                        series={[
                            {data: footprintData, label: 'Total'},
                            {data: savingData, label: 'Saved'},
                            {data: footprintData.map((data, idx) => data - savingData[idx]), label: 'Spent'},
                        ]}
                        xAxis={[{scaleType: 'point', data: xLabels}]}
                        margin={{
                            left: 30,
                            right: 30,
                            top: 50,
                            bottom: 50,
                        }}
                    />
                </Card>
            </Box>
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

export default connect(mapStateToProps)(Dashboard);