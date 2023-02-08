import { useQuery } from "@tanstack/react-query";
import {
  AnimatePresence,
  motion,
  ScrollMotionValues,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMatch } from "react-router";
import styled from "styled-components";
import { getMovies, IMovies } from "../Api";
import { makeImagePath } from "../Utility";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
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
  height: 120vh;
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
  margin-bottom: 150px;
`;

const Slider = styled(motion.div)`
  position: relative;
`;
const Row = styled(motion.div)`
  position: absolute;
  top: 90vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  div:first-child {
    transform-origin: center left;
  }
  div:last-child {
    transform-origin: center right;
  }
`;
const Box = styled(motion.div)`
  height: 200px;
  background-color: purple;
`;

const RowVariant = {
  hidden: {
    x: window.outerWidth + 10,
  },
  showing: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

const offset = 6;

const SliderImage = styled(Box)<{ bgimage: string }>`
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center center;
`;

const ImageTitle = styled(motion.span)`
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.theme.black.darker};
  width: 100%;
  padding: 10px 0;
  text-align: center;
`;
const TitleVariant = {
  normal: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "tween",
    },
  },
};

const ImageVariant = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.5,
      type: "tween",
    },
  },
};

const Modal = styled(motion.div)<{ toppos: number }>`
  position: absolute;
  width: 40%;
  height: 80vh;
  left: 0;
  right: 0;
  top: ${(props) => props.toppos + 100}px;
  margin: 0 auto;
`;

const OverLay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;

const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`;

const BigOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.white.lighter};
`;

function Home() {
  const { data, isLoading } = useQuery<IMovies>(
    ["movies", "nowPlaying"],
    getMovies
  );

  const [index, setIndex] = useState(0);
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalPage = data?.results.length;
      setIndex((prev) =>
        prev === Math.floor(totalPage / offset) ? 0 : prev + 1
      );
    }
  };

  const [leaving, setLeaving] = useState(false);

  console.log(data, isLoading);

  const BigImageMatch = useMatch("/movies/:movieId");
  const navigator = useNavigate();
  const onBigImageClick = (movieId: string) => {
    navigator(`/movies/${movieId}`);
  };

  const { scrollY } = useScroll();

  console.log(BigImageMatch);

  const clickedMovie =
    BigImageMatch &&
    data?.results.find(
      (movie) => movie.id + "" === BigImageMatch.params.movieId
    );

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
        <AnimatePresence
          initial={false}
          onExitComplete={() => setLeaving(false)}
        >
          <Row
            variants={RowVariant}
            initial="hidden"
            animate="showing"
            exit="exit"
            transition={{ type: "linear", duration: 1 }}
            key={index}
          >
            {data?.results
              .slice(index * offset, offset * (index + 1))
              .map((movie) => (
                <SliderImage
                  layoutId={movie.id + ""}
                  onClick={() => onBigImageClick(movie.id + "")}
                  initial="normal"
                  variants={ImageVariant}
                  whileHover="hover"
                  transition={{ type: "tween" }}
                  bgimage={makeImagePath(movie.backdrop_path, "w500")}
                  key={movie.id}
                >
                  <ImageTitle variants={TitleVariant}>{movie.title}</ImageTitle>
                </SliderImage>
              ))}
          </Row>
        </AnimatePresence>
        <AnimatePresence>
          {BigImageMatch ? (
            <>
              <OverLay
                onClick={() => navigator("/")}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              ></OverLay>
              <Modal
                toppos={scrollY.get()}
                layoutId={BigImageMatch.params.movieId}
              >
                {clickedMovie && (
                  <>
                    <BigCover
                      style={{
                        backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                          clickedMovie.backdrop_path,
                          "w500"
                        )})`,
                      }}
                    />
                    <BigTitle>{clickedMovie.title}</BigTitle>
                    <BigOverview>{clickedMovie.overview}</BigOverview>
                  </>
                )}
              </Modal>
            </>
          ) : null}
        </AnimatePresence>
      </Slider>
    </Wrapper>
  );
}

export default Home;
