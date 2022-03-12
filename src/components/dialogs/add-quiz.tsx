import AlertDialogSlide from "./alertDialogSlide";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {REST_API_ENDPOINTS} from "../../core/interfaces/routes";
import {postRequest} from "../../core/fetchers";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {debug_print} from "../../core/utils";
import {debug} from "util";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

const AddQuizDialog = ({open, setOpen, courseId}) => {
    const serverToken = useSelector((state: RootState) => state.auth.server_token);
    const user = useSelector((state: RootState) => state.auth.userProfile);
    const [quizTitle, setQuizTitle] = useState("");
    const [quizDescription, setQuizDescription] = useState("");
    const [questionList, setQuestionList] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [currentOptions, setCurrentOptions] = useState([]);
    const [currentOption, setCurrentOption] = useState("");
    const [isCurrentCorrect, setIsCurrentCorrect] = useState(false);
    debug_print("currentQuestion1",currentQuestion)
    const publishQuestion = () => {
        debug_print("currentQuestion",currentQuestion)
        const questionBody = {
            question: currentQuestion
        }
        debug_print("questionbody",questionBody)
        postRequest(REST_API_ENDPOINTS.quiz.v1.question, questionBody, serverToken).then((response) => {
            debug_print("created question", response);
            currentOptions.forEach((item, index) => {
                const optionBody = {
                    option: item.option,
                    is_correct: item.isCorrect,
                    question: response.id
                }
                postRequest(REST_API_ENDPOINTS.quiz.v1.option, optionBody, serverToken).then((result) => {
                    debug_print("option", result);
                })
            })
            setQuestionList((prevQuesList) => {
                let questions = [...prevQuesList];
                questions.push({
                    question: currentQuestion,
                    id: response.id,
                    options: currentOptions
                })
                // debug_print("prevQuesList", prevQuesList);
                return questions;
            })
        })
    }
    const publishQuiz = () => {
        const questionIds = questionList.map(question => question.id);
        const body = {
            title: quizTitle,
            description: quizDescription,
            course: courseId,
            teacher: [user.teacher],
        }
        postRequest(REST_API_ENDPOINTS.quiz.v1.quiz, body, serverToken).then(async (response) => {
            debug_print("quiz ", response);
            await questionList.forEach((item, index) => {
                fetch(`${REST_API_ENDPOINTS.quiz.v1.question}${item.id}/`, {
                        method: "PATCH",
                        body: JSON.stringify({
                            quiz: [response.id]
                        }),
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: `token ${serverToken}`
                        }
                    }
                ).then((response) => response.json()).then((data)=> {
                    debug_print("updated question", data)
                })
            })
            setQuestionList([]);
            setQuizTitle("");
            setOpen(false);
        })
    }
    useEffect(() => {
        debug_print("questions", questionList)
        setCurrentQuestion("");
        setCurrentOptions([]);
    }, [questionList]);
    useEffect(() => {
        setCurrentOption("");
        setIsCurrentCorrect(false);
    }, [currentOptions]);

    // debug_print("questions",questionList)
    return (
        <>
            <AlertDialogSlide open={open} setOpen={setOpen}>
                <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={5} container justifyContent={"center"} alignItems={"center"}>
                        <img src="/add-quiz.png" alt="add_video_illustration" className={"width-1/1"}/>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography align={"center"} gutterBottom className={"font-bold"}>
                            Create a quiz
                        </Typography>
                        <Typography>
                            Quizzes are a great way to evaluate your students. Add a question, add options for the
                            question, then publish it.
                        </Typography>
                        <TextField label={"Quiz title"} value={quizTitle} fullWidth sx={{my: 1}}
                                   onChange={(e) => setQuizTitle(e.target.value)}/>
                        <TextField label={"Quiz description"} value={quizDescription} fullWidth sx={{my: 1}}
                                   onChange={(e) => setQuizDescription(e.target.value)}/>
                    </Grid>
                    {questionList.map((item, index) => (
                        <Grid key={index} item container>
                            <Grid item xs={12}>
                                <Typography variant={"h6"} gutterBottom sx={{mb: 2}}>
                                    {index + 1}. {item.question}
                                </Typography>
                            </Grid>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="to return response"
                                    value={"to return response"}
                                    name="radio-buttons-group"

                                >
                                    {item.options.map((item, index) => (
                                        <FormControlLabel key={index} value={`${item.option}`} control={<Radio/>}
                                                          label={`${item.option}`} checked={item.isCorrect}/>))}

                                </RadioGroup>
                            </FormControl>

                        </Grid>
                    ))}
                    <Grid container>
                        <Grid item xs={12} sx={{my: 2}}>
                            <TextField label={"Question"} fullWidth value={currentQuestion}
                                       onChange={(e) => setCurrentQuestion(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} container spacing={1}>
                            {currentOptions.map((item, index) => (
                                <FormControlLabel key={index} value={`${item.option}`} sx={{width: "100%", ml: 1}}
                                                  control={<Radio/>}
                                                  checked={item.isCorrect}
                                                  label={`${item.option}`}/>))}
                            <Grid item xs={6} md={8}>
                                <TextField label={"Option"} fullWidth value={currentOption}
                                           onChange={(e) => setCurrentOption(e.target.value)}/>
                            </Grid>
                            <Grid item xs={3} md={2} container alignItems={"center"}>
                                <Checkbox checked={isCurrentCorrect}
                                          onChange={(e) => setIsCurrentCorrect(e.target.checked)}/>
                                correct
                            </Grid>
                            <Grid item xs={3} md={2} container alignItems={"center"}>
                                <Button variant={"contained"} className={"bg-c_primary_main"} fullWidth onClick={() => {
                                    setCurrentOptions((prevOptions) => {
                                        let opps = [...prevOptions];
                                        opps.push({option: currentOption, isCorrect: isCurrentCorrect});

                                        return opps
                                    })
                                }}>Add
                                    option</Button>
                            </Grid>

                        </Grid>
                        <Button variant={"contained"} className={"bg-c_primary_main"} sx={{mt: 2}}
                                onClick={publishQuestion}>
                            Publish question
                        </Button>
                    </Grid>
                    <Button variant={"contained"} sx={{width: "50%", mt: 2}} onClick={publishQuiz}>
                        Add Quiz
                    </Button>

                </Grid>
            </AlertDialogSlide>
        </>
    )
}
export default AddQuizDialog