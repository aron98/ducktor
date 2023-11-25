import {useCountUp} from "use-count-up";
import {CircularProgress} from "@mui/joy";
import Typography from "@mui/joy/Typography";

const CircularProgressCountUp = (props) => {
    const { value } = useCountUp({
        isCounting: true,
        duration: 2,
        start: 0,
        end: Math.min(Math.max(Number(props.value),0), 100),
    });
    return (
        <CircularProgress determinate value={Number(value)} sx={{ '--CircularProgress-size': '7em' }}>
            <Typography><b>{Number(Number(100-value).toFixed(2))}%</b><br/>remaining</Typography>
        </CircularProgress>
    );
}

export default CircularProgressCountUp;