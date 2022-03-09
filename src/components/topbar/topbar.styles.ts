import {createStyles, makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => createStyles({

    appbarRoot: {
        background: `${theme.palette.background.default}!important`,
        boxShadow: "none",
        "& .MuiButton-root": {
            color: theme.palette.text.secondary
        },

    },
    drawerActive: {
        color: `${theme.palette.text.primary}!important`,
        fontWeight: 700
    },
}))

export default useStyles