import {
	AppBar,
	Avatar,
	Box,
	Button,
	Divider,
	Grid,
	IconButton,
	InputBase,
	Menu,
	MenuItem,
	Paper,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../../site-settings/material-ui-theme/theme";
import { BreakpointContext } from "../../pages/_app";
import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./topbar.styles";
import { useRouter } from "next/router";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { REST_API_ENDPOINTS, ROUTES } from "../../core/interfaces/routes";
import GoogleIcon from "@mui/icons-material/Google";
import { debug_print } from "../../core/utils";
import Link from "next/link";
import GoogleLoginButton from "./google-login";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getRequest } from "../../core/fetchers";

const TopBar = () => {
	const classes = useStyles();
	const router = useRouter();
	const breakpoints = useContext(BreakpointContext);
	const navClass = (href: string) => (router.pathname == href ? classes.drawerActive : "");
	const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
	const serverToken = useSelector((state: RootState) => state.auth.server_token);
	const userProfile = useSelector((state: RootState) => state.auth.userProfile);
	const [categories, setCategories] = useState([]);
	const [anchorEl, setAnchorEl] = useState(null);
	const [searchText, setSearchText] = useState("");
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	useEffect(() => {
		getRequest(REST_API_ENDPOINTS.course.v1.category, serverToken).then((response) => {
			debug_print(response);
			setCategories(response);
		});
	}, []);

	return (
		<>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{categories.map((item, index) => (
					<MenuItem
						key={index}
						onClick={() => {
							router.push(`${ROUTES.category}${item.id}`).then();
							handleClose();
						}}
					>
						{item.title}
					</MenuItem>
				))}
			</Menu>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position='static'
					className={classes.appbarRoot}
					sx={{
						bgcolor: `${theme.palette.background.default}!important`,
						boxShadow: "none",
						"& .MuiButton-root": {
							color: theme.palette.text.secondary,
						},
					}}
				>
					<Toolbar>
						{breakpoints.isMobileView && (
							<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
								<MenuIcon />
							</IconButton>
						)}
						<Link href={"/"} passHref>
							<Typography
								variant='h6'
								component='div'
								sx={{ flexGrow: breakpoints.isMobileView && 1, cursor: "pointer" }}
							>
								<Typography
									sx={{ color: theme.palette.text.secondary, display: "inline" }}
									className={"font-bold text-lg"}
								>
									Teach
								</Typography>
								<Typography sx={{ display: "inline" }} className={"font-bold text-xl"}>
									&
								</Typography>
								<Typography
									sx={{ color: theme.palette.primary.main, display: "inline" }}
									className={"font-bold text-lg"}
								>
									Learn
								</Typography>
							</Typography>
						</Link>
						{!breakpoints.isMobileView && (
							<Grid container>
								<Grid item md={12} lg={6} container justifyContent={"center"}>
									<Paper
										component='form'
										sx={{
											p: 1,
											display: "flex",
											alignItems: "center",
											width: 400,
											borderRadius: 5,
											bgcolor: "#EEEEEE",
											boxShadow: "none",
										}}
									>
										<SearchIcon />
										<InputBase
											sx={{ ml: 1, flex: 1 }}
											className={"text-xs"}
											placeholder='Search for courses'
											inputProps={{ "aria-label": "search google maps" }}
											value={searchText}
											onChange={(e)=>setSearchText(e.target.value)}
											onKeyDown={(e)=> {

												if(e.key.toLowerCase()=="enter") {
													e.preventDefault()
													debug_print(`${ROUTES.search}?text=${searchText}`)
													router.push(`${ROUTES.search}?text=${searchText}`).then()
												}
											}}
										/>
									</Paper>
								</Grid>
								{breakpoints.isDesktopView && (
									<Grid item lg={6} container alignItems={"center"}>
										<Link href={"/"} passHref>
											<Button className={navClass("/")}>Home</Button>
										</Link>
										<Link href={ROUTES.courses} passHref>
											<Button className={navClass(ROUTES.courses)}>Courses</Button>
										</Link>
										<Button
											endIcon={<KeyboardArrowDownIcon />}
											id='basic-button'
											aria-controls={open ? "basic-menu" : undefined}
											aria-haspopup='true'
											aria-expanded={open ? "true" : undefined}
											onClick={handleClick}
										>
											Categories
										</Button>

										<Link href={ROUTES.createCourse} passHref>
											<Button className={navClass(ROUTES.createCourse)}>Teach</Button>
										</Link>
										<Link href={ROUTES.about} passHref>
											<Button className={navClass(ROUTES.about)}>About</Button>
										</Link>
									</Grid>
								)}
							</Grid>
						)}

						{/*<IconButton className={"bg-c_inactive_text"}><GoogleIcon/></IconButton>*/}
						{!isAuthenticated ? <GoogleLoginButton /> : <Avatar src={userProfile?.picture} />}
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default TopBar;
