import {
    ViberShareButton,
    ViberIcon
} from "react-share";

function ViberShare(props) {
    return (
        <ViberShareButton
            url={props.url}
            title={props.title}
        >
            <ViberIcon size={props.size} round />
        </ViberShareButton>
    )
}

export default ViberShare;