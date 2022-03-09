import AlertDialogSlide from "./alertDialogSlide";
import {Button, Checkbox, Grid, TextField, Typography} from "@mui/material";
import OptionIcon from "../../assets/option_icon.svg"
import CorrectOptionIcon from "../../assets/correct-option.svg"

const AddQuizDialog = ({open, setOpen}) => {
    return (
        <>
            <AlertDialogSlide open={open} setOpen={setOpen}>
                <Grid container spacing={2} alignItems={"center"}>
                    <Grid item xs={5} container justifyContent={"center"} alignItems={"center"}>
                        <img src="add-quiz.png" alt="add_video_illustration" className={"width-1/1"}/>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography align={"center"} gutterBottom className={"font-bold"}>
                            Create a quiz
                        </Typography>
                        <Typography>
                            Quizes are a great way to evaluate your students. Add a question, add options for the
                            question, then publish it.
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12}>
                            <Typography variant={"h6"} gutterBottom className={"mb-4"}>
                                1. What is the purpose of serializer?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} container alignItems={"center"} spacing={2} className={"ml-5 mb-2"}>
                            <OptionIcon/>
                            <Typography className={"ml-2 mt-1"} gutterBottom>
                                to filter queryset
                            </Typography>
                        </Grid>
                        <Grid item xs={12} container alignItems={"center"} spacing={2} className={"ml-5 mb-2"}>
                            <OptionIcon/>
                            <Typography className={"ml-2 mt-1"} gutterBottom>
                                to return response
                            </Typography>
                        </Grid>
                        <Grid item xs={12} container alignItems={"center"} spacing={2} className={"ml-5 mb-2"}>
                            <CorrectOptionIcon/>
                            <Typography className={"ml-2 mt-1"} gutterBottom>
                                to convert model objects to native python data structure
                            </Typography>
                        </Grid>
                        <Grid item xs={12} container alignItems={"center"} spacing={2} className={"ml-5 mb-2"}>
                            <OptionIcon/>
                            <Typography className={"ml-2 mt-1"} gutterBottom>
                                to make api faster
                            </Typography>
                        </Grid>

                    </Grid>
                    <Grid container>
                        <Grid item xs={12} className={"mb-4"}>
                            <TextField label={"Question"} fullWidth/>
                        </Grid>
                        <Grid item xs={12} container spacing={1}>
                            <Grid item xs={6} md={8}>
                                <TextField label={"Option"} fullWidth/>
                            </Grid>
                            <Grid item xs={3} md={2} container alignItems={"center"}>
                                <Checkbox/>
                                correct
                            </Grid>
                            <Grid item xs={3} md={2} container alignItems={"center"}>
                                <Button variant={"contained"} className={"bg-c_primary_main"} fullWidth>Add option</Button>
                            </Grid>

                        </Grid>
                        <Button variant={"contained"} className={"bg-c_primary_main mt-4"}>
                            Publish question
                        </Button>
                    </Grid>

                </Grid>
            </AlertDialogSlide>
        </>
    )
}
export default AddQuizDialog