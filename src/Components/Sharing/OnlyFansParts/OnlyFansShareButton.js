// import { Icon } from "@mui/material";
import OnlyFansIcon from "./OnlyFansIcon";
import './OnlyFans.css'; 

function OnlyFansShareButton(){
    const handleClick = () => {
        window.open('https://youtu.be/dQw4w9WgXcQ?si=pLuzsZQY72dIL8FS', '_blank');
    };

    return (
        <button 
        className="onlyFansShareButton" 
        onClick={handleClick}>
            <OnlyFansIcon/>
        </button>
    )
}

export default OnlyFansShareButton