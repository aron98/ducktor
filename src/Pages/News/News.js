import {AspectRatio, Box, Card, CardContent, CardOverflow, Divider} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Link from '@mui/joy/Link';
import {connect} from "react-redux";

const News = (props) => {

    return (
        <Box>
            {props.news.map((newsItem, index) => (
                <Box p={1} key={index}>
                    <Card variant="soft">
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                    src={newsItem.image}
                                    alt=""
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">
                                <Link overlay underline="none">
                                    {newsItem.name}
                                </Link>
                            </Typography>
                        </CardContent>
                        <CardOverflow variant="soft">
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                                <Typography level="body-xs">{`${newsItem.view_count} views`}</Typography>
                                <Divider orientation="vertical" />
                                <Typography level="body-xs">{newsItem.date}</Typography>
                            </CardContent>
                        </CardOverflow>
                    </Card>
                </Box>
            ))}
        </Box>
    );
};


const mapStateToProps = (state) => {
    return {
        news: state.newsReducer.news,
    }
}

export default connect(mapStateToProps)(News);
