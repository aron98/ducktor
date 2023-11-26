import LinkedinShare from "./LinkedinShare";
import OnlyFansShare from "./OnlyFansShare";
import ViberShare from "./ViberShare";
import TwitterShare from "./TwitterShare";
import Grid from "@mui/material/Grid";
import {Box, Tooltip} from "@mui/joy";

function ShareButtons(props) {    
    return (
    <Grid container>
        <Grid item xs>
            <TwitterShare size={props.size} url={props.url} title={props.title}/>
        </Grid>
        <Grid item xs>
            <LinkedinShare size={props.size} url={props.url}/>
        </Grid>
        <Grid item xs>
            <ViberShare size={props.size} url={props.url} title={props.title}/>
        </Grid>
        <Grid item xs>
            <Tooltip title="Send your friends a duck pic" variant="solid">
                <Box>
                    <OnlyFansShare size={props.size}/>
                </Box>
            </Tooltip>
        </Grid>
    </Grid>
    );
}
export default ShareButtons;
