import { Grid } from "@mui/joy";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    FacebookShareCount,
    GabIcon,
    GabShareButton,
    HatenaIcon,
    HatenaShareButton,
    HatenaShareCount,
    InstapaperIcon,
    InstapaperShareButton,
    LineIcon,
    LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    LivejournalIcon,
    LivejournalShareButton,
    MailruIcon,
    MailruShareButton,
    OKIcon,
    OKShareButton,
    OKShareCount,
    PinterestIcon,
    PinterestShareButton,
    PinterestShareCount,
    PocketIcon,
    PocketShareButton,
    RedditIcon,
    RedditShareButton,
    RedditShareCount,
    TelegramIcon,
    TelegramShareButton,
    TumblrIcon,
    TumblrShareButton,
    TumblrShareCount,
    TwitterShareButton,
    ViberIcon,
    ViberShareButton,
    VKIcon,
    VKShareButton,
    VKShareCount,
    WeiboIcon,
    WeiboShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    WorkplaceIcon,
    WorkplaceShareButton,
    XIcon,
} from "react-share";
import OnlyFansShare from "./OnlyFansShare";

function MassengerShare(props) {
    const handleShareClick = () => {
        const messengerLink = `https://www.messenger.com/send/?url=${encodeURIComponent('https://www.google.com/')}`;
    
        window.open(messengerLink, '_blank');
      };
    
      return (
        <Grid container>
            <Grid item>
                <TwitterShareButton
                    url={props.url}
                    title='Some title'
                >
                    <XIcon size={32} round />
                </TwitterShareButton>
            </Grid>
            <Grid item>
                <LinkedinShareButton
                    url={props.url}
                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </Grid>
            <Grid item>
                <FacebookShareCount
                    url={props.url}
                >
                    {(count) => count}
                </FacebookShareCount>
            </Grid>
            <Grid item>
                <ViberShareButton
                    url={props.url}
                    title='Random title'
                >
                    <ViberIcon size={32} round />
                </ViberShareButton>
            </Grid>
            <Grid item>
                <OnlyFansShare />
            </Grid>

        </Grid>

      );
}
export default MassengerShare;
