import {Box} from "@mui/joy";
import OnlyFansLogo from './OnlyFans_Logo_400x400.png'

function OnlyFansShare() {
    return (
        <Box>
            <img src={OnlyFansLogo} alt='OnlyFans' style={{width: 40, height: 40}}/>
        </Box>
    )
}

export default OnlyFansShare;