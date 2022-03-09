import {createStyles, makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({
    illustration: {
        width: "85%"
    },
    card: {
        borderRadius: 16,
        width: "100%",
        background: "#fff",
        boxShadow: "0px 5px 19px rgba(207, 194, 194, 0.25)",
        padding: 30
    },
}))
export default useStyles