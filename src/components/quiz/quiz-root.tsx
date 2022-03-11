import {Box, Button, Grid, Typography} from "@mui/material";
import useStyles from "./quiz.styles";
import {useContext, useEffect, useState} from "react";
import {BreakpointContext} from "../../pages/_app";
import QuestionCard from "./question-card";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {useRouter} from "next/router";
import {getRequest, postRequest} from "../../core/fetchers";
import {REST_API_ENDPOINTS} from "../../core/interfaces/routes";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {debug_print} from "../../core/utils";

const QuizRoot = () => {
    const classes = useStyles();
    const router = useRouter();
    const serverToken = useSelector((state: RootState) => state.auth.server_token);
    const user = useSelector((state:RootState)=> state.auth.userProfile);
    const [quiz, setQuiz] = useState<any>({});
    const [correct, setCorrect] = useState([]);
    const breakpoints = useContext(BreakpointContext);
    const submit = ()=> {
        let total = 0;
        correct.forEach((item)=> {
            item && total++;
        })
        const body = {
            got_marks: total,
            total_marks: correct.length,
            student: user.student,
            quiz: router.query.id
        }
        postRequest(REST_API_ENDPOINTS.quiz.v1.quizResult,body,serverToken).then((response)=> {
            debug_print(response);
        })
    }
    useEffect(() => {
        const {id} = router.query;
        if(id==undefined) return;
        debug_print('id',id)
        getRequest(`${REST_API_ENDPOINTS.quiz.v1.quiz}${id}`, serverToken).then((response) => {
            debug_print(response);
            setQuiz(response);
            setCorrect(new Array(response.question_list.length).fill(false));
        })
    }, [router.query]);
    debug_print(correct)
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
                                {quiz?.title}
                            </Typography>
                            <Typography>
                                {quiz?.description}
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
            <Grid container sx={{my: 6}} spacing={2} justifyContent={"center"}>
                <Grid item xs={12}>
                    {quiz?.question_list?.map((item, index) => (<QuestionCard key={index} question={item} setCorrectList={setCorrect} index={index}/>))}
                </Grid>
                <Grid item xs={6} container justifyContent={"center"}>
                    <Button variant={"contained"} className={"bg-c_primary_main mt-2"} fullWidth onClick={submit}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
export default QuizRoot