import { DefaultTheme } from "styled-components";

export interface CustomTheme extends DefaultTheme {
  color: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  breakpoints: {
    mobileMax: string;
  };
}
