import React, {useContext} from "react";
import TopBar from "../topbar/topbar";
import {Theme} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import {BreakpointContext} from "../../pages/_app";

const AppLayout: React.FC = ({children}) => {
    const breakpoints = useContext(BreakpointContext);
    const styles = (theme: Theme) =>
        createStyles({
            root: {
                minHeight: "100%",
                display: "flex",
                "& *:hover": {
                    opacity: breakpoints.isMobileView ? "1!important" : "",
                },
            },
            appBarSpacer: theme.mixins.toolbar,
            content: {
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                // minHeight: "100vh",

            },
        });
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <>
            <TopBar/>
            <main className={classes.content}>
                <div>
                {children}
                </div>
            </main>
        </>);
};

export default AppLayout;
