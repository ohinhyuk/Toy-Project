import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled, {
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from "styled-components";
import Circle from "./Circle";
import Router from "./Router";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom } from "./Atoms";
// import { HelmetProvider } from "react-helmet-async";
const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const GlobalStyle = createGlobalStyle`
 
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

*{
  box-sizing: border-box;
}

body{
  font-family: 'Dancing Script', cursive;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}

a{
  text-decoration: none;
  color:inherit;
}


`;

function App() {
  // const [isDark, setIsDark] = useState(false);
  const isDark = useRecoilValue(isDarkAtom);
  // const onClick = () => setIsDark((curr) => !curr);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {/* <button>Change Theme</button> */}
        <HelmetProvider>
          <GlobalStyle />
          <Router />
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
