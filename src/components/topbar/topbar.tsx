import {AppBar, Box, Button, Divider, Grid, IconButton, InputBase, Paper, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import theme from "../../site-settings/material-ui-theme/theme";
import {BreakpointContext} from "../../pages/_app";
import {useContext} from "react";
import SearchIcon from '@mui/icons-material/Search';
import useStyles from "./topbar.styles";
import {useRouter} from "next/router";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {ROUTES} from "../../core/interfaces/routes";
import GoogleIcon from '@mui/icons-material/Google';
import {debug_print} from "../../core/utils";
import Link from "next/link"

const TopBar = () => {
    const classes = useStyles();
    const router = useRouter();
    const breakpoints = useContext(BreakpointContext);
    const navClass = (href: string) => (router.pathname == href ? classes.drawerActive : "");
    debug_print(breakpoints)
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" className={classes.appbarRoot} sx={{
                    bgcolor: `${theme.palette.background.default}!important`,
                    boxShadow: "none",
                    "& .MuiButton-root": {
                        color: theme.palette.text.secondary
                    },
                }}>
                    <Toolbar>
                        {breakpoints.isMobileView && <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>}
                        <Link href={"/"} passHref>
                            <Typography variant="h6" component="div"
                                        sx={{flexGrow: breakpoints.isMobileView && 1, cursor: "pointer"}}>
                                <Typography sx={{color: theme.palette.text.secondary, display: 'inline'}}
                                            className={"font-bold text-lg"}>Teach</Typography>
                                <Typography sx={{display: 'inline'}} className={"font-bold text-xl"}>&</Typography>
                                <Typography sx={{color: theme.palette.primary.main, display: 'inline'}}
                                            className={"font-bold text-lg"}>Learn</Typography>
                            </Typography>
                        </Link>
                        {!breakpoints.isMobileView && <Grid container>
                            <Grid item md={12} lg={6} container justifyContent={"center"}>
                                <Paper
                                    component="form"
                                    sx={{
                                        p: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: 400,
                                        borderRadius: 5,
                                        bgcolor: "#EEEEEE",
                                        boxShadow: "none"
                                    }}

                                >
                                    <SearchIcon/>
                                    <InputBase
                                        sx={{ml: 1, flex: 1}}
                                        className={"text-xs"}
                                        placeholder="Search for courses"
                                        inputProps={{'aria-label': 'search google maps'}}
                                    />

                                </Paper>
                            </Grid>
                            {breakpoints.isDesktopView && <Grid item lg={6} container alignItems={"center"}>
                                <Link href={'/'} passHref>
                                    <Button className={navClass('/')}>
                                        Home
                                    </Button>
                                </Link>
                                <Link href={ROUTES.courses} passHref>
                                    <Button className={navClass(ROUTES.courses)}>
                                        Courses
                                    </Button>
                                </Link>
                                <Button endIcon={<KeyboardArrowDownIcon/>}>
                                    Categories
                                </Button>
                                <Link href={ROUTES.createCourse} passHref>
                                    <Button className={navClass(ROUTES.createCourse)}>
                                        Teach
                                    </Button>
                                </Link>
                                <Link href={ROUTES.about} passHref>
                                    <Button className={navClass(ROUTES.about)}>
                                        About
                                    </Button>
                                </Link>

                            </Grid>}
                        </Grid>}

                        {/*<IconButton className={"bg-c_inactive_text"}><GoogleIcon/></IconButton>*/}
                        <Button startIcon={<GoogleIcon/>} variant={"contained"} sx={{
                            bgcolor: `${theme.palette.primary.main}!important`,
                            color: `${theme.palette.text.primary}!important`
                        }}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default TopBar