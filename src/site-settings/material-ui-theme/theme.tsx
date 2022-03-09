import {createTheme} from '@mui/material';
import {red} from "@mui/material/colors"
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#FFC72C',
            light: "#F7F4EB",
            dark: "#F5B501"
        },
        secondary: {
            main: '#176590',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#FAFAFA',
        },
        text: {
            primary: "#585652",
            secondary: "#C4C4C4"
        }
    },
    typography: {
        fontFamily: `${["Raleway", "Roboto", "Helvetica", "Arial", "sans-serif"].join()}!important`,

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: "8px",
                    boxShadow: "none"
                },
            },
        },
    },
});

export default theme;