import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getRequest} from "../../core/fetchers";
import {REST_API_ENDPOINTS} from "../../core/interfaces/routes";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {debug_print} from "../../core/utils";
import {Grid, Typography} from "@mui/material";
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
            getRequest(`${REST_API_ENDPOINTS.quiz.v1.quiz}${response.quiz}`,serverToken).then((response) => {
                setQuiz(response)
            })
        })
    }, [router.query]);

    return (
        <>
            <Grid container alignItems={"flex-end"} sx={{height:"50vh"}}>
                <Grid item xs={12} container justifyContent={"center"}>
                    <Typography variant={"h3"} gutterBottom sx={{display: "block"}}>
                        You have got
                    </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent={"center"}>
                    <Typography variant={"h2"} gutterBottom sx={{color:theme.palette.primary.main}}>
                        {result?.got_marks} out of {result?.total_marks}
                    </Typography>
                </Grid>
                <Grid item xs={12}  container justifyContent={"center"}>
                    <Typography variant={"h3"} gutterBottom sx={{color:theme.palette.secondary.main}}>
                        in {quiz?.title}
                    </Typography>
                </Grid>
            </Grid>


        </>
    )
}
export default QuizResult