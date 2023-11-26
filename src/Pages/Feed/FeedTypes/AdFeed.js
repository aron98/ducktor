import {AspectRatio, Box, Card, CardContent, CardOverflow, Divider} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Link from '@mui/joy/Link';

function AdFeed(props) {
    return (
        <Box p={1} key={props.index}>
            <Card variant="soft">
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <img
                            src={props.feedsItem.image}
                            alt=""
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="title-md">
                        <Link href={props.feedsItem.link} target='_blank' overlay underline="none">
                            {props.feedsItem.name}
                        </Link>
                    </Typography>
                </CardContent>
                <CardOverflow variant="soft">
                    <Divider inset="context" />
                    <CardContent orientation="horizontal">
                        <Typography level="body-xs">sponsored</Typography>
                    </CardContent>
                </CardOverflow>
            </Card>
        </Box>
    )
}
export default AdFeed;

/*
ez a $$$$ forrás (nem a Soros)
tips and trick
news
jobs

Community
achievement events
*/