
import OnlyFansShareButton from './OnlyFansParts/OnlyFansShareButton'
import OnlyFansIcon from './OnlyFansParts/OnlyFansIcon';

function OnlyFansShare(props) {
    return (
        <OnlyFansShareButton url={props.url}>
            <OnlyFansIcon size={props.size} round />
        </OnlyFansShareButton>
    )
}

export default OnlyFansShare;