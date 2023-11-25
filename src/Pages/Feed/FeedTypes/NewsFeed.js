import {AspectRatio, Box, Card, CardContent, CardOverflow, Divider} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Link from '@mui/joy/Link';

function NewsFeed(props) {
    return (
        <Box p={1} key={props.index}>
            <Card variant="soft">
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <img
                            src={props.newsItem.image}
                            alt=""
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="title-md">
                        <Link href={props.newsItem.link} target='_blank' overlay underline="none">
                            {props.newsItem.name}
                        </Link>
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
export default NewsFeed;

/*
ez a $$$$ forrás (nem a Soros)
tips and trick
news
jobs

Community
achievement events
*/