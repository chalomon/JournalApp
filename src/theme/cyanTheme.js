import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const cyanTheme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#048a8a'
        },
        error: {
            main: red.A400
        }
    }
})