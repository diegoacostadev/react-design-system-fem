import { primary, gray, secondary, green, red, yellow } from "./colors";
import { baseFont } from "./typography";

const defaultTheme = {
  primary: primary['500'],
  primaryHoverColor: primary['600'],
  primaryActiveColor: primary['700'],
  secondary: secondary['500'],
  secondaryHoverColor: secondary['600'],
  secondaryActiveColor: secondary['700'],
  tertiary: gray['700'],
  tertiaryHoverColor: gray['800'],
  tertiaryActiveColor: gray['900'],
  textColorDark: gray['600'],
  textColorLight: gray['100'],
  textColorWhite: '#fff',
  textColorInverted: gray['100'],
  baseFont,
  bodyBg: gray[50],
  white: '#fff',
  formControlBG: gray[100],
  formControlColor: gray[600],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
};

const darkTheme = {
  primary: primary['500'],
  primaryHoverColor: primary['600'],
  primaryActiveColor: primary['700'],
  secondary: secondary['500'],
  secondaryHoverColor: secondary['600'],
  secondaryActiveColor: secondary['700'],
  tertiary: gray['50'],
  tertiaryHoverColor: gray['100'],
  tertiaryActiveColor: gray['200'],
  textColorDark: gray['100'],
  textColorLight: gray['600'],
  textColorWhite: '#fff',
  textColorInverted: gray['100'],
  baseFont,
  bodyBg: gray[900],
  white: '#fff',
  formControlBG: gray[700],
  formControlColor: gray[100],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
};


export { defaultTheme, darkTheme };
