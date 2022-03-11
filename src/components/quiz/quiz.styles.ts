import {createStyles, makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        background: "#FFFFFF",
        boxShadow: "0px 4px 20px rgba(192, 193, 181, 0.25)",
        borderRadius: "16px",
        padding : 20,
        marginBottom: 10
    }
}))

export default useStyles