import { Grid } from "@mui/joy";
import LinkedinShare from "./LinkedinShare";
import OnlyFansShare from "./OnlyFansShare";
import ViberShare from "./ViberShare";
import TwitterShare from "./TwitterShare";

function ShareButtons(props) {    
    return (
    <Grid container>
        <Grid item>
            <TwitterShare size={props.size} url={props.url} title={props.title}/>
        </Grid>
        <Grid item>
            <LinkedinShare size={props.size} url={props.url}/>
        </Grid>
        <Grid item>
            <ViberShare size={props.size} url={props.url} title={props.title}/>
        </Grid>
        <Grid item>
            <OnlyFansShare size={props.size}/>
        </Grid>
    </Grid>
    );
}
export default ShareButtons;
