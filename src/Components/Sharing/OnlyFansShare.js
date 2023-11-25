import {Box} from "@mui/joy";
import OnlyFansLogo from './OnlyFans_Logo_400x400.png'
import './OnlyFansShare.css'; 



function OnlyFansShare() {
    return (
        <Box>
            <img 
                class = 'onlyFansLogo onlyFansLogoContainer'
                src={OnlyFansLogo} alt='OnlyFans'
            />
        </Box>
    )
}

export default OnlyFansShare;