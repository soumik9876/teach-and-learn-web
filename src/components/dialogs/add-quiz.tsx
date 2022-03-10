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
import OptionIcon from "../../assets/option_icon.svg"
import CorrectOptionIcon from "../../assets/correct-option.svg"

const AddQuizDialog = ({open, setOpen, courseId}) => {
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
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="to return response"
                                value={"to return response"}
                                name="radio-buttons-group"

                            >
                                <FormControlLabel value="to filter queryset" control={<Radio />} label="to filter queryset" />
                                <FormControlLabel value="to return response" control={<Radio />} label="to return response" />
                                <FormControlLabel value="to convert model objects to native python data structure" control={<Radio />} label="to convert model objects to native python data structure" />
                                <FormControlLabel value="to make api faster" control={<Radio />} label="to make api faster" />
                            </RadioGroup>
                        </FormControl>

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