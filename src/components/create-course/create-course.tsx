import {Box, Button, Grid, Step, StepLabel, Stepper, Typography} from "@mui/material";
import useStyles from "./create-course.styles";
import {useState} from "react";

const CreateCourseRoot = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    return (
        <>
            <Box p={8} sx={{height: "70vh"}}>
                <Grid container sx={{height: "100%"}}>
                    <Grid item xs={7} container justifyContent={"center"} alignItems={"center"}>
                        <img src="create-course.png" alt="course_illustration" className={classes.illustration}/>
                    </Grid>
                    <Grid item xs={5}>
                        <Box className={classes.card}>
                            <Typography className={"uppercase font-bold"} align={"center"} gutterBottom>
                                Create course
                            </Typography>
                            <Box sx={{width: '100%'}}>
                                <Stepper activeStep={activeStep} alternativeLabel>
                                    <Step key={0}>
                                        <StepLabel>{"Course details"}</StepLabel>
                                    </Step>
                                    <Step key={1}>
                                        <StepLabel>{"Add content"}</StepLabel>
                                    </Step>

                                </Stepper>
                                {activeStep == 0 ? (
                                    <>
                                        hello
                                    </>
                                ) : (
                                    <>
                                        Not hello
                                    </>
                                )}
                                <Button fullWidth variant={"contained"} onClick={() => setActiveStep(1)}>
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