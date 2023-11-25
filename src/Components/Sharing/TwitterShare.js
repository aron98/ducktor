import {
    TwitterShareButton,
    XIcon
} from "react-share";

function TwitterShare(props) {
    return (
        <TwitterShareButton
            url={props.url}
            title={props.title}
        >
            <XIcon size={props.size} round />
        </TwitterShareButton>
    )
}

export default TwitterShare;