import {AspectRatio, Box, Card, CardContent, CardOverflow, Divider} from "@mui/joy";
import Typography from "@mui/joy/Typography";

function VideoFeed(props) {
    return (
        <Box p={1} key={props.index}>
            <Card variant="soft">
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <iframe width="100%" height="100%" src={props.feedsItem.link} title={props.feedsItem.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" ></iframe>
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="title-md">
                        {props.feedsItem.name}
                    </Typography>
                </CardContent>
                <CardOverflow variant="soft">
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                        <Typography level="body-xs">{`${props.feedsItem.view_count} views`}</Typography>
                        <Divider orientation="vertical" />
                        <Typography level="body-xs">{(new Date(props.feedsItem.date)).toDateString()}</Typography>
                        <Divider orientation="vertical" />
                        <Typography level="body-xs">{props.feedsItem.spend_time}</Typography>
                    </CardContent>
                </CardOverflow>
            </Card>
        </Box>
    )
}
export default VideoFeed;