import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
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
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
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

body{
  color : black;
}

a{
  text-decoration: none;
  color: inherit;
}



`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
`;

const Wrapper = styled(motion.div)`
  height: 100vh;
  background: linear-gradient(135deg, #e09, #d0e);
  width: 100vw;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  border-radius: 50%;
  background-color: blue;
  width: 70px;
  height: 70px;
`;
const Grid = styled.div`
  display: grid;
  width: 50vw;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Layout = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LayoutVariant = {
  start: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  ani: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  end: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
};

function App() {
  const [id, setId] = useState<undefined | string>(undefined);
  const [isLayouted, setIsLayouted] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Grid>
          {[0, 1, 2, 3].map((e) => (
            <Box onClick={() => setId(e + "")} layoutId={e + ""} key={e}></Box>
          ))}
        </Grid>
        <AnimatePresence>
          {id !== undefined ? (
            <Layout
              onClick={() => setId(undefined)}
              variants={LayoutVariant}
              initial="start"
              animate="ani"
              exit="end"
            >
              <Box layoutId={id} style={{ width: 400 }}></Box>
            </Layout>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
