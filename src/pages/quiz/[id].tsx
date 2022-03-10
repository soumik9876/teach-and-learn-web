import QuizRoot from "../../components/quiz/quiz-root";
import {Box} from "@mui/material";
import {useContext} from "react";
import {BreakpointContext} from "../_app";

const Quiz = () => {
    const breakpoints = useContext(BreakpointContext);
    return (
        <>
            <Box px={breakpoints.isMobileView ? 2 : 15} mt={2}>
                <QuizRoot/>
            </Box>
        </>
    )
}

export default Quiz