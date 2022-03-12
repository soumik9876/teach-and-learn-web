import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getRequest} from "../../core/fetchers";
import {REST_API_ENDPOINTS} from "../../core/interfaces/routes";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {debug_print} from "../../core/utils";
import {Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import theme from "../../site-settings/material-ui-theme/theme";

const QuizResult = () => {
    const router = useRouter();
    const serverToken = useSelector((state: RootState) => state.auth.server_token);
    const [result, setResult] = useState<any>({});
    const [quiz, setQuiz] = useState<any>({});
    useEffect(() => {
        const {id} = router.query;
        if (id == undefined)
            return;
        getRequest(`${REST_API_ENDPOINTS.quiz.v1.quizResult}${id}`, serverToken).then((response) => {
            debug_print(response);
            setResult(response);
            getRequest(`${REST_API_ENDPOINTS.quiz.v1.quiz}${response.quiz}`, serverToken).then((response) => {
                debug_print(response)
                setQuiz(response)
            })
        })
    }, [router.query]);
    debug_print("quiz", quiz)
    return (
        <>
            <Grid container alignItems={"flex-end"} sx={{height: "50vh"}}>
                <Grid item xs={12} container justifyContent={"center"}>
                    <Typography variant={"h3"} gutterBottom sx={{display: "block"}}>
                        You have got
                    </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent={"center"}>
                    <Typography variant={"h2"} gutterBottom sx={{color: theme.palette.primary.main}}>
                        {result?.got_marks} out of {result?.total_marks}
                    </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent={"center"}>
                    <Typography variant={"h3"} gutterBottom sx={{color: theme.palette.secondary.main}}>
                        in {quiz?.title}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item xs={8} sx={{mb:2}}>Correct answers </Grid>
                {quiz != {} && quiz.question_list?.map((question, index) => (
                    <Grid key={index} item xs={11} md={8} > <Box  sx={{
                        background: "#FFFFFF",
                        boxShadow: "0px 4px 20px rgba(192, 193, 181, 0.25)",
                        borderRadius: "16px",
                        padding: 5,
                        marginBottom: 4,

                    }}>
                        <Grid item xs={12}>
                            <Typography variant={"subtitle1"} gutterBottom className={"mb-4 font-bold"}>
                                {question.question}
                            </Typography>
                        </Grid>

                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                // defaultValue="to return response"
                                // value={correctAns}
                                name="radio-buttons-group"
                            >
                                {question?.options.map((item, index) => (
                                    <FormControlLabel key={index} value={index} control={<Radio/>}
                                                      label={`${item.option}`} checked={item.is_correct}/>
                                ))

                                }
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default QuizResult