import {createTheme} from '@mui/material';
import {red} from "@mui/material/colors"
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#b6a6aa',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;