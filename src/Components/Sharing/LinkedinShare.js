import {
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

function LinkedinShare(props) {
    return (
        <LinkedinShareButton
            url={props.url}
            title={props.title}
        >
            <LinkedinIcon size={props.size} round />
        </LinkedinShareButton>
    )
}

export default LinkedinShare;


