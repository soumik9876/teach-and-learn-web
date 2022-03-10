import {
    Box,
    Button,
    FormControl,
    Grid, InputLabel,
    MenuItem,
    Select,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography
} from "@mui/material";
import useStyles from "./create-course.styles";
import {useEffect, useState} from "react";
import {Add} from "@mui/icons-material";
import AddVideoDialog from "../dialogs/add-video";
import AddArticleDialog from "../dialogs/add-article";
import AddQuizDialog from "../dialogs/add-quiz";
import {getRequest, postRequest} from "../../core/fetchers";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {REST_API_ENDPOINTS} from "../../core/interfaces/routes";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {debug} from "util";
import {debug_print} from "../../core/utils";

const CreateCourseRoot = () => {
    const classes = useStyles();
    const serverToken = useSelector((state: RootState) => state.auth.server_token);
    const userProfile = useSelector((state: RootState) => state.auth.userProfile);
    const [activeStep, setActiveStep] = useState(0);
    const [showAddVideoDialog, setShowAddVideoDialog] = useState(false);
    const [showAddArticleDialog, setShowAddArticleDialog] = useState(false);
    const [showAddQuizDialog, setShowAddQuizDialog] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [categories, setCategories] = useState([]);
    const [imageLink, setImageLink] = useState("");
    useEffect(() => {
        getRequest(REST_API_ENDPOINTS.course.v1.category, serverToken).then((response) => {
            setCategories(response);
            debug_print(response)
        })
    }, []);

    function createCourse() {

        if (title == "" || category == "") {
            return;
        }
        const body = {
            title: title,
            description: description,
            category: category,
            price: price,
            teacher: [userProfile.teacher.id],
            image_link: imageLink
        }
        debug_print(body)
        postRequest(REST_API_ENDPOINTS.course.v1.course, body, serverToken).then((response) => {
            debug_print(response)
        })
        setActiveStep(1);
    }
    debug_print(categories)
    return (
        <>
            <AddVideoDialog open={showAddVideoDialog} setOpen={setShowAddVideoDialog}/>
            <AddArticleDialog open={showAddArticleDialog} setOpen={setShowAddArticleDialog}/>
            <AddQuizDialog open={showAddQuizDialog} setOpen={setShowAddQuizDialog}/>
            <Box p={15} sx={{height: "80vh"}}>
                <Grid container sx={{height: "100%"}}>
                    <Grid item xs={8} container justifyContent={"center"} alignItems={"center"}>
                        <img src="create-course.png" alt="course_illustration" className={classes.illustration}/>
                    </Grid>
                    <Grid item xs={4} container alignItems={"center"}>
                        <Box className={classes.card}>
                            <Typography className={"uppercase font-bold"} align={"center"} gutterBottom>
                                Create course
                            </Typography>
                            <Box sx={{width: '100%'}}>
                                <Stepper activeStep={activeStep} alternativeLabel sx={{mb: 2}}>
                                    <Step key={0}>
                                        <StepLabel>{"Course details"}</StepLabel>
                                    </Step>
                                    <Step key={1}>
                                        <StepLabel>{"Add content"}</StepLabel>
                                    </Step>

                                </Stepper>
                                {activeStep == 0 ? (
                                    <>
                                        <TextField label={"Title"} fullWidth value={title} required
                                                   onChange={(event) => setTitle(event.target.value)}/>
                                        <TextField label={"Description"} fullWidth sx={{my: 1}} multiline rows={4}
                                                   value={description}
                                                   onChange={(event) => setDescription(event.target.value)}/>
                                        <TextField label={"Image Link"} fullWidth sx={{my: 1}}
                                                   value={imageLink}
                                                   onChange={(event) => setImageLink(event.target.value)}/>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                            <Select required
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={category}
                                                    label="Category"
                                                    onChange={(event) => setCategory(event.target.value)}
                                            >
                                                {categories && categories.map((item, index) => (
                                                    <MenuItem key={index} value={item.id}>{item.title}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <TextField type={"number"} label={"course charge"} fullWidth sx={{my: 1}}
                                                   value={price}
                                                   onChange={(event) => setPrice(parseInt(event.target.value))}/>
                                        <Button fullWidth variant={"contained"} onClick={createCourse}
                                                className={"bg-c_primary_main"}>
                                            Create
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Grid container sx={{mb: 2}}>
                                            <Grid item xs={4} container justifyContent={"center"}>
                                                <Grid item xs={12} container justifyContent={"center"}>
                                                    <Button variant={"contained"}
                                                            className={"bg-c_primary_main p-5 mb-1"}
                                                            onClick={() => setShowAddVideoDialog(true)}
                                                            sx={{p: 2, mb: 1}}>
                                                        <Add/>
                                                    </Button>
                                                </Grid>
                                                <Typography className={"font-bold"}>Add video</Typography>
                                            </Grid>
                                            <Grid item xs={4} container justifyContent={"center"}>
                                                <Grid item xs={12} container justifyContent={"center"}>
                                                    <Button variant={"contained"}
                                                            className={"bg-c_primary_main p-5 mb-1"}
                                                            onClick={() => setShowAddArticleDialog(true)}
                                                            sx={{p: 2, mb: 1}}>

                                                        <Add/>
                                                    </Button>
                                                </Grid>
                                                <Typography className={"font-bold"}>Add article</Typography>
                                            </Grid>
                                            <Grid item xs={4} container justifyContent={"center"}>
                                                <Grid item xs={12} container justifyContent={"center"}>
                                                    <Button variant={"contained"}
                                                            className={"bg-c_primary_main "}
                                                            sx={{p: 2, mb: 1}}
                                                            onClick={() => setShowAddQuizDialog(true)}>
                                                        <Add/>
                                                    </Button>
                                                </Grid>
                                                <Typography className={"font-bold"}>Add quiz</Typography>
                                            </Grid>

                                        </Grid>
                                    </>
                                )}

                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default CreateCourseRoot