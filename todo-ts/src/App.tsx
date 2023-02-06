import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Wrapper = styled(motion.div)`
  height: 100vh;
  background: linear-gradient(135deg, #e09, #d0e);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "50%" },
  drag: { backgroundColor: "#1ee5d5", transition: { duration: "10" } },
};

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [360, -360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, #00ee24, #eec200)",
      "linear-gradient(135deg, #e09, #d0e)",
      "linear-gradient(135deg, #006bee, #1800ee)",
    ]
  );

  // const { scrollYProgress } = useScroll();
  // useEffect(() => {
  //   scrollYProgress.onChange(() => console.log(scrollYProgress.get()));
  // }, [scrollYProgress]);

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  const Svg = styled.svg`
    width: 200px;
    height: 200px;
  `;

  return (
    <>
      <GlobalStyle />
      <Wrapper style={{ background: gradient }}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <motion.path
            initial={{
              stroke: "white",
              strokeWidth: 5,
              pathLength: 0.01,
              fill: "rgba(255,255,255,0)",
            }}
            animate={{
              pathLength: 0.8,
              fill: "rgba(255,255,255,1)",
            }}
            transition={{ duration: 5 }}
            fill="white"
            d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
          />
        </Svg>
        <Box drag="x" dragSnapToOrigin style={{ x, rotateZ }}></Box>
      </Wrapper>
    </>
  );
}

export default App;
