import {Box, Button, Grid, Typography} from "@mui/material";
import useStyles from "./quiz.styles";
import {useContext} from "react";
import {BreakpointContext} from "../../pages/_app";
import QuestionCard from "./question-card";

const QuizRoot = () => {
    const classes = useStyles();
    const breakpoints = useContext(BreakpointContext);
    return (
        <>
            <Box className={classes.card}>
                <Grid container spacing={2}>
                    <Grid item xs={4} lg={3} container alignItems={"center"}>
                        <img src="/nodeJs2.png" alt="course_image" className={"rounded-2xl"}/>
                    </Grid>
                    <Grid item xs={8} lg={9} container alignItems={"center"}>
                        <Grid item xs={12} md={9}>
                            <Typography className={"font-bold"} variant={"h6"}>
                                Quiz title
                            </Typography>
                            <Typography>
                                Quiz description - Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)Complete
                                NodeJS Developer in 2022 (GraphQL, MongoDB, + more)Complete NodeJS Developer in 2022
                                (GraphQL, MongoDB, + more)Complete NodeJS Developer in 2022 (GraphQL, MongoDB, +
                                more)Complete NodeJS Developer in 2022 (GraphQL, MongoDB, + more)Complete NodeJS
                                Developer in 2022
                            </Typography>
                        </Grid>
                        {!breakpoints.isMobileView &&
                        <Grid item md={3}>
                            <img src="/add-quiz.png" alt="quiz_illustration"/>
                        </Grid>
                        }
                    </Grid>
                </Grid>
            </Box>
            <Grid container className={"my-6"} spacing={2} justifyContent={"center"}>
                <Grid item xs={12}>
                    <QuestionCard/>
                </Grid>
                <Grid item xs={12}>
                    <QuestionCard/>
                </Grid>
                <Grid item xs={12}>
                    <QuestionCard/>
                </Grid>
                <Grid item xs={6} container justifyContent={"center"}>
                    <Button variant={"contained"} className={"bg-c_primary_main mt-2"} fullWidth>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
export default QuizRoot