import React from "react";

import {Breakpoint, Dialog, IconButton, Theme} from "@mui/material";
import {makeStyles, createStyles} from "@mui/styles";
import Slide from "@mui/material/Slide";
import {TransitionProps} from "@mui/material/transitions";
import CancelIcon from "@mui/icons-material/Cancel"
import theme from "../../site-settings/material-ui-theme/theme";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface props {
    children: React.ReactNode;
    open: boolean;
    setOpen: any;
    maxWidth?: Breakpoint | false;
    dialogClass?: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backDrop: {
            backdropFilter: "blur(2px)",
            backgroundColor: `#4c4f537a`,
        },
        closeBtn: {
            "&& ": {
                "& svg": {
                    width: "24px",
                    height: "24px",
                    "& path": {
                        fill: theme.palette.text.primary,
                    },
                },
                position: "absolute",
                right: ".5rem",
                top: ".5rem",

            },
            "&&:hover": {
                opacity: ".7",
            },
        },
    })
);
const AlertDialogSlide: React.FC<props> = ({children, open, setOpen}) => {
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Dialog
                open={open}
                //@ts-ignore
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth={"md"}
                // className={dialogClass}
                BackdropProps={{
                    classes: {
                        root: classes.backDrop,
                    },
                }}
                sx={{
                    "& .MuiDialog-paper": {
                        background: theme.palette.background.default,
                        margin: "0 1rem!important",
                        overflowY: "visible!important",
                        borderRadius: 4,
                        padding: 6
                    },
                }}
            >
                <IconButton onClick={() => setOpen(false)} className={classes.closeBtn}>
                    <CancelIcon/>
                </IconButton>
                {children}
            </Dialog>
        </>
    );
};
export default AlertDialogSlide;
