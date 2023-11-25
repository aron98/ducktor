import {AspectRatio, Box, Card, CardContent, CardOverflow, Divider} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {IconButton} from "@mui/material";
import {BookmarkAdd} from "@mui/icons-material";
import Link from '@mui/joy/Link';

const News = (props) => {
    return (
        <Box>
            <Box p={1}>
                <Card variant="soft">
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography level="title-md">
                            <Link overlay underline="none">
                                Yosemite National Park
                            </Link>
                        </Typography>
                    </CardContent>
                    <CardOverflow variant="soft">
                        <Divider inset="context" />
                        <CardContent orientation="horizontal">
                            <Typography level="body-xs">6.3k views</Typography>
                            <Divider orientation="vertical" />
                            <Typography level="body-xs">1 hour ago</Typography>
                        </CardContent>
                    </CardOverflow>
                </Card>
            </Box>
            <Box p={1}>
                <Card variant="soft">
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography level="title-md">
                            <Link overlay underline="none">
                                Yosemite National Park
                            </Link>
                        </Typography>
                    </CardContent>
                    <CardOverflow variant="soft">
                        <Divider inset="context" />
                        <CardContent orientation="horizontal">
                            <Typography level="body-xs">6.3k views</Typography>
                            <Divider orientation="vertical" />
                            <Typography level="body-xs">1 hour ago</Typography>
                        </CardContent>
                    </CardOverflow>
                </Card>
            </Box>
            <Box p={1}>
                <Card variant="soft">
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography level="title-md">
                            <Link overlay underline="none">
                                Yosemite National Park
                            </Link>
                        </Typography>
                    </CardContent>
                    <CardOverflow variant="soft">
                        <Divider inset="context" />
                        <CardContent orientation="horizontal">
                            <Typography level="body-xs">6.3k views</Typography>
                            <Divider orientation="vertical" />
                            <Typography level="body-xs">1 hour ago</Typography>
                        </CardContent>
                    </CardOverflow>
                </Card>
            </Box>
            <Box p={1}>
                <Card variant="soft">
                    <CardOverflow>
                        <AspectRatio ratio="2">
                            <img
                                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                        <Typography level="title-md">
                            <Link overlay underline="none">
                                Yosemite National Park
                            </Link>
                        </Typography>
                    </CardContent>
                    <CardOverflow variant="soft">
                        <Divider inset="context" />
                        <CardContent orientation="horizontal">
                            <Typography level="body-xs">6.3k views</Typography>
                            <Divider orientation="vertical" />
                            <Typography level="body-xs">1 hour ago</Typography>
                        </CardContent>
                    </CardOverflow>
                </Card>
            </Box>
        </Box>
    )
}

export default News;