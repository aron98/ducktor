import {AspectRatio, Box, Card, CardContent, CardOverflow, Divider} from "@mui/joy";
import Typography from "@mui/joy/Typography";

function VideoFeed(props) {
    return (
        <Box p={1} key={props.index}>
            <Card variant="soft">
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <iframe width="100%" height="100%" src={props.newsItem.link} title={props.newsItem.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="title-md">
                        {props.newsItem.name}
                    </Typography>
                </CardContent>
                <CardOverflow variant="soft">
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                        <Typography level="body-xs">{`${props.newsItem.view_count} views`}</Typography>
                        <Divider orientation="vertical" />
                        <Typography level="body-xs">{props.newsItem.date}</Typography>
                    </CardContent>
                </CardOverflow>
            </Card>
        </Box>
    )
}
export default VideoFeed;