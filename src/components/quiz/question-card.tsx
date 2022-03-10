import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import useStyles from "./quiz.styles";
import OptionIcon from "../../assets/option_icon.svg";
import CorrectOptionIcon from "../../assets/correct-option.svg";
import {useState} from "react";

const QuestionCard = ()=> {
    const classes = useStyles();
    const [correctAns, setCorrectAns] = useState("");
    return (
        <>
            <Box className={classes.card} >
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} gutterBottom className={"mb-4 font-bold"}>
                        1. What is the purpose of serializer?
                    </Typography>
                </Grid>

                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        // defaultValue="to return response"
                        value={correctAns}
                        name="radio-buttons-group"
                        onChange={(event)=> {
                            setCorrectAns(event.target.value)
                        }}
                    >
                        <FormControlLabel value="to filter queryset" control={<Radio />} label="to filter queryset" />
                        <FormControlLabel value="to return response" control={<Radio />} label="to return response" />
                        <FormControlLabel value="to convert model objects to native python data structure" control={<Radio />} label="to convert model objects to native python data structure" />
                        <FormControlLabel value="to make api faster" control={<Radio />} label="to make api faster" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default QuestionCard