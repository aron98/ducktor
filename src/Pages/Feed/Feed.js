import {Box} from "@mui/joy";
import {connect} from "react-redux";
import NewsFeed from "./FeedTypes/NewsFeed";
import VideoFeed from "./FeedTypes/VideoFeed";

const Feed = (props) => {

    return (
        <Box>
            {props.news.map((newsItem, index) => 
                <Box key={index}>
                    {
                        newsItem.type === "news" ? (
                            <NewsFeed index={index} newsItem={newsItem} />
                        ) : (
                            <VideoFeed index={index} newsItem={newsItem} />
                        )
                    }
                </Box>
            )}
        </Box>
    );
};


const mapStateToProps = (state) => {
    return {
        news: state.newsReducer.news,
    }
}

export default connect(mapStateToProps)(Feed);
