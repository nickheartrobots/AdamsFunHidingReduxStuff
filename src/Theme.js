import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 16,
        fontSize: 14,
        fontFamily: ["AdapTek-Sans", "Helvetica", "Arial", "sans-serif"].join(','),
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontWeight: 400,
            fontSize: "1.875rem",
            lineHeight: 1,
            letterSpacing: "0em",
        },
        h2: {
            fontWeight: 500,
            fontSize: "1.5rem",
            lineHeight: 1,
            letterSpacing: "-0.00833em"
        },
        h3: {
            fontWeight: 500,
            fontSize: "1.125rem",
            lineHeight: 1.1,
            letterSpacing: "0em"
        },
        h4: {
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: 1.1,
            letterSpacing: "0.00735em"
        },
        h5: {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.1,
            letterSpacing: "0em"
        },
        h6: {
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: 1.1,
            letterSpacing: "0.0075em"
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em"
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em"
        },
        body1: {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em"
        },
        body2: {
            fontWeight: 400,
            color: "#707070",
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: "0.01071em"
        },
        button: {
            fontWeight: 700,
            fontSize: "0.875rem",
            lineHeight: 1.75,
            letterSpacing: "0.02857em",
            textTransform: "uppercase"
        },
        caption: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em"
        },
        overline: {
            fontWeight: 700,
            color: "#707070",
            fontSize: "0.75rem",
            lineHeight: 1,
            letterSpacing: ".095em",
            textTransform: "uppercase"
        }
    },
    palette: {
        primary: {
            main: "#5B6670"
        },
        secondary: {
            main: "#2D5A9B"
        },
        activeGreen: {
            main: "#3CB954",
            light: "#B1E3BB",
        },
        successGreen: {
            main: "#3CB954",
            light: "#DBFFE3",
        },
        warningGold: {
            main: "#FFAE39",
            light: "#FFEBCB",
        },
        errorRed: {
            main: "#CE2626",
            light: "#FFDBDB",
        },
    },
    overrides: {
        MuiInputBase: {
            root: {
                backgroundColor: '#fff',
            }
        },
        MuiFormLabel: {
            asterisk: {
                color: '#db3131',
                '&$error': {
                    color: '#db3131'
                },
            }
        },
        MuiSvgIcon: {
            colorPrimary: {
                main: '#5B6670'
            }
        },
        MuiContainer: {
            maxWidthXs: {
                paddingLeft: 16,
                paddingRight: 16
            },
            maxWidthSm: {
                paddingLeft: 16,
                paddingRight: 16
            },
            maxWidthMd: {
                paddingLeft: 16,
                paddingRight: 16
            },
            maxWidthLg: {
                paddingLeft: 16,
                paddingRight: 16
            },
            maxWidthXl: {
                paddingLeft: 16,
                paddingRight: 16
            }
        },
        MuiChip: {
            outlined: {
                borderWidth: '2px'
            }
        },
        MuiLink: {
            root: {
                color: "#2D5A9B"
            }
        }
    },
});

export default theme;