import { darkMode } from "./theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

:focus {
  outline-offset: 8px;
}

html, body {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  background-color: ${darkMode.color.background};
  color: ${darkMode.color.primary};

  @media (max-width: ${darkMode.breakpoints.mobileMax}) {
        font-size: 14px;
    }
}

button {
  cursor: pointer;
  display: block;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: currentColor;
}`