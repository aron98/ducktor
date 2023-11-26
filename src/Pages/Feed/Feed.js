import {Box} from "@mui/joy";
import {connect} from "react-redux";
import NewsFeed from "./FeedTypes/NewsFeed";
import VideoFeed from "./FeedTypes/VideoFeed";
import AdFeed from "./FeedTypes/AdFeed";

const Feed = (props) => {

    return (
        <Box>
            {props.feeds.map((feedsItem, index) => 
                <Box key={index}>
                    {
                        feedsItem.type === "news" ? (
                            <NewsFeed index={index} feedsItem={feedsItem} />
                        ) : feedsItem.type === "video" ? (
                            <VideoFeed index={index} feedsItem={feedsItem} />
                        ) : (
                            <AdFeed index={index} feedsItem={feedsItem} />
                        )
                    }
                </Box>
            )}
        </Box>
    );
};


const mapStateToProps = (state) => {
    return {
        feeds: state.feedReducer.feeds,
    }
}

export default connect(mapStateToProps)(Feed);
