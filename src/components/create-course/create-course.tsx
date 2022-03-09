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
import {useState} from "react";
import {Add} from "@mui/icons-material";

const CreateCourseRoot = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    return (
        <>
            <Box p={15} sx={{height: "70vh"}}>
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
                                        <TextField label={"title"} fullWidth/>
                                        <TextField label={"description"} fullWidth sx={{my: 1}} multiline rows={4}/>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={}
                                                label="Age"
                                                // onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField label={"course charge"} fullWidth sx={{my: 1}}/>
                                    </>
                                ) : (
                                    <>
                                        <Grid container sx={{mb: 2}}>
                                            <Grid item xs={4} container justifyContent={"center"}>
                                                <Button variant={"contained"} className={"bg-c_primary_main p-5 mb-1"}>
                                                    <Add/>
                                                </Button>
                                                <Typography className={"font-bold"}>Add video</Typography>

                                            </Grid>
                                            <Grid item xs={4} container justifyContent={"center"}>
                                                <Button variant={"contained"} className={"bg-c_primary_main p-5 mb-1"}>
                                                    <Add/>
                                                </Button>
                                                <Typography className={"font-bold"}>Add article</Typography>
                                            </Grid>
                                            <Grid item xs={4} container justifyContent={"center"}>
                                                <Button variant={"contained"} className={"bg-c_primary_main p-5 mb-1"}>
                                                    <Add/>
                                                </Button>
                                                <Typography className={"font-bold"}>Add quiz</Typography>
                                            </Grid>
                                        </Grid>
                                    </>
                                )}
                                <Button fullWidth variant={"contained"} onClick={() => setActiveStep(1)}
                                        className={"bg-c_primary_main"}>
                                    Next
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default CreateCourseRoot