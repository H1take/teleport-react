import { createTheme } from "@mui/material/styles";

const Colors = {
    red: "#FD3162",
    purple: "#BC31FD",
    goldYellow: "#FD9331",
    lightBlue: "#5184D0",
    primaryBlue: "#103D9B"
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primaryBlue
        },
        secondary: {
            main: Colors.lightBlue
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableFocusRipple: true,
                disableElevation: true
            }
        }
    }
});

export default theme;