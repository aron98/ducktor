import {useCountUp} from "use-count-up";
import {CircularProgress} from "@mui/joy";
import Typography from "@mui/joy/Typography";

const CircularProgressCountUp = (props) => {
    const { value } = useCountUp({
        isCounting: true,
        duration: 1,
        start: 0,
        end: props.percent,
    });

    return (
        <CircularProgress determinate value={Number(value)} sx={{ '--CircularProgress-size': '7em' }}>
            <Typography><b>{100-value}%</b><br/>remaining</Typography>
        </CircularProgress>
    );
}

export default CircularProgressCountUp;