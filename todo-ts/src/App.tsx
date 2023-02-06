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
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
  margin-top: 20px;
`;

const Wrapper = styled(motion.div)`
  height: 100vh;
  background: linear-gradient(135deg, #e09, #d0e);
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible((prev) => !prev);
  };

  const boxVariant = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotateZ: 360,
    },
    exit: {
      scale: 0,
    },
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence>
          {visible ? (
            <Box
              variants={boxVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          ) : null}
        </AnimatePresence>
        <button style={{ width: "100px", margin: "auto 0" }} onClick={onClick}>
          Click me!
        </button>
      </Wrapper>
    </>
  );
}

export default App;
