import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { getMovies, IMovies } from "../Api";
import { makeImagePath } from "../Utility";

const Wrapper = styled.div`
  width: 100vw;
  height: 120vh;
  /* background-color: black; */
`;

const Loading = styled.div`
  width: 100%;
  background-color: black;
  height: 20vh;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Banner = styled.div<{ bgImage: string }>`
  position: absolute;
  top: 0;
  /* z-index: -1; */
  padding: 0 50px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgImage});
  background-size: cover;
`;

const Title = styled.div`
  font-size: 60px;
  margin-bottom: 20px;
`;

const Overview = styled.div`
  font-size: 30px;
  line-height: 1.2;
  width: 50%;
`;

const Slider = styled(motion.div)`
  position: relative;
`;
const Row = styled(motion.div)`
  position: absolute;
  top: -200px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;
const Box = styled(motion.div)`
  height: 200px;
  background-color: purple;
`;

const RowVariant = {
  hidden: {
    x: window.outerWidth + 5,
    // x: 1000,
  },
  showing: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 5,
    // x: "-1000px",
  },
};

function Home() {
  const { data, isLoading } = useQuery<IMovies>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const [index, setIndex] = useState(0);
  const incraseIndex = () => setIndex((prev) => prev + 1);

  console.log(data, isLoading);
  return (
    <Wrapper>
      {isLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Banner
          onClick={incraseIndex}
          bgImage={makeImagePath(data?.results[5].backdrop_path || "")}
        >
          <Title>{data?.results[5].title}</Title>
          <Overview>{data?.results[5].overview}</Overview>
        </Banner>
      )}
      <Slider>
        <AnimatePresence>
          <Row
            variants={RowVariant}
            initial="hidden"
            animate="showing"
            exit="exit"
            transition={{ type: "linear", duration: 1 }}
            key={index}
          >
            {[1, 2, 3, 4, 5, 6].map((e) => (
              <Box key={e}>{e}</Box>
            ))}
          </Row>
        </AnimatePresence>
      </Slider>
    </Wrapper>
  );
}

export default Home;
