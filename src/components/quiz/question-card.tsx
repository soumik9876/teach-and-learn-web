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
import {useEffect, useState} from "react";
import {debug_print} from "../../core/utils";

const QuestionCard = ({question, setCorrectList, index})=> {
    const classes = useStyles();
    const [correctAns, setCorrectAns] = useState(null);
    useEffect(() => {
        if(correctAns==null) return
        setCorrectList((prev)=> {
            let newList = [...prev];
            newList[index] = (question.options[correctAns].is_correct ?? false);
            return newList;
        })
    }, [correctAns]);

    return (
        <>
            <Box className={classes.card} >
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} gutterBottom className={"mb-4 font-bold"}>
                        {question.question}
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
                        {question?.options.map((item,index)=> (
                            <FormControlLabel key={index} value={index} control={<Radio/>} label={`${item.option}`}/>
                        ))

                        }
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default QuestionCard