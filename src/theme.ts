import {
  createTheme,
  darken,
  lighten,
  responsiveFontSizes,
} from "@mui/material/styles";
import { ValueOrValueByBreakpoints } from "./utils/mui";

interface CustomBackgroundPaletteOptions {
  transparentWhite: string;
  darkBlue: string;
}

interface CustomMixinsOptions {
  rootLayout: {
    maxWidth: number;
    commonSpacing: ValueOrValueByBreakpoints;
  };
  appHeader: {
    height: number;
  };
}

interface CustomShape {
  radius: {
    xs: number;
    sm: number;
    md: number;
    xl: number;
    lg: number;
    circle: string;
    none: number;
  };
  border: string;
}

declare module "@mui/material/styles" {
  interface TypeBackground extends CustomBackgroundPaletteOptions {}
  interface Mixins extends CustomMixinsOptions {}
}

declare module "@mui/system" {
  interface Shape extends CustomShape {}
}

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#5724e8",
        light: lighten("#5724e8", 0.2),
        dark: "#05041c",
      },
      secondary: {
        main: "#5c3e9b",
      },
      common: {
        black: "#000000",
        white: "#ffffff",
      },
      text: {
        primary: "#ffffff",
      },
      background: {
        transparentWhite: "#ffffff1a",
        darkBlue: darken("#192b3c", 0.3),
      },
      grey: {
        [100]: "#bbbbbb",
        [200]: "#000000de",
        [300]: "#222222",
      },
    },
    mixins: {
      rootLayout: {
        maxWidth: 1600,
        commonSpacing: { xs: 8, md: 12 },
      },
      appHeader: {
        height: 64,
      },
    },
    shape: {
      radius: {
        xs: 2,
        sm: 4,
        md: 8,
        lg: 12,
        xl: 16,
        circle: "100%",
        none: 0,
      },
      border: "1px solid",
    },
    typography: {
      fontFamily: `
    var(--font-inter, 'Inter'), 
       sans-serif`,
      h1: {
        fontSize: "125px",
        letterSpacing: "-0.02em",
        lineHeight: 1,
      },
      h5: {
        fontSize: "40px",
        letterSpacing: "-0.02em",
        lineHeight: 1,
      },
      h6: {
        fontSize: "32px",
        letterSpacing: "-0.02em",
        lineHeight: 1,
      },
      subtitle1: {
        fontSize: "28px",
        lineHeight: 1.2,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#000000",
          },
          a: {
            color: "inherit",
            textDecoration: "none",

            ":hover": {
              color: darken("#ffffff", 0.3),
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
          disableElevation: true,
        },
        styleOverrides: {
          root: ({ theme, ownerState }) => {
            return {
              textTransform: "none",
              height: "46px",
              "&.MuiButton-sizeLarge": {
                height: "52px",
              },
              "&.MuiButton-sizeMedium": {
                fontSize: 16,
              },
              "&.MuiButton-sizeSmall": {
                height: "32px",
              },

              ...(ownerState.variant === "contained" && {
                background: theme.palette.primary.main,

                ":hover": {
                  backgroundColor: theme.palette.primary.light,
                },
              }),
            };
          },
          contained: {
            borderRadius: 100,
          },
          outlined: {
            borderRadius: 100,
          },
        },
      },
    },
  })
);

export default theme;
