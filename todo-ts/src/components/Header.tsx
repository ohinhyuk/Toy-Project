import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
`;

const Nav = styled(motion.nav)`
  z-index: 3;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  /* border: 1px solid black; */
  background-color: black;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
`;

const Logo = styled(motion.svg)`
  /* border: 1px solid black; */
  width: 100px;
  padding: 0 30px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Item = styled.li`
  /* border: 1px solid black; */
  font-size: 18px;
  padding: 0 20px;
  color: white;
  position: relative;
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 10px;
  height: 10px;
  margin-top: 4px;
  background-color: red;
  border-radius: 50%;
  top: 20px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const NetflixVaiant = {
  initial: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

const Input = styled(motion.input)`
  border: 1 solid white;
  transform-origin: right center;
  position: absolute; // 부모의 위치 기준
  right: 0px; // 오른쪽으로 부터 떨어져 있는 정도
  padding: 10px 10px;
  padding-left: 40px; // 돋보기가 들어갈 수 있게
  /* z-index: -1; // 객체들의 높낮이 이다. 가장 아래에 깔리게 한다. */
  color: white;
  font-size: 16px;
  background-color: transparent; // 투명한
  border: 1px solid ${(props) => props.theme.white.lighter};
`;

const SearchLogo = styled(Logo)`
  width: 25px;
  z-index: 5;
`;
const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 30px;

  svg {
    height: 25px;
  }
`;

const inputVariant = {
  initial: {
    scaleX: 0,
  },
  end: {},
};

const navVariant = {
  scroll: {
    backgroundColor: "rgba(0,0,0,1)",
  },
  top: {
    backgroundColor: "rgba(0,0,0,0)",
  },
};

interface IForm {
  keyword: string;
}

function Header() {
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("tv");
  console.log(homeMatch, tvMatch);

  const [searchOpen, setSearchOpen] = useState(false);
  const searchAnimate = useAnimation();

  const toggleSearch = () => {
    if (searchOpen) {
      searchAnimate.start({
        scaleX: 0,
      });
    } else {
      searchAnimate.start({
        scaleX: 1,
      });
    }
    setSearchOpen((prev) => !prev);
  };

  const { scrollY } = useScroll();
  const scrollAnimate = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 5) {
        scrollAnimate.start("scroll");
      } else {
        scrollAnimate.start("top");
      }
    });
  }, [scrollY]);
  const navigator = useNavigate();
  const { register, handleSubmit } = useForm<IForm>();
  const onValid = ({ keyword }: IForm) => {
    console.log(keyword);
    navigator(`/search?keyword=${keyword}`);
  };
  return (
    <Wrapper>
      <Nav variants={navVariant} initial="top" animate={scrollAnimate}>
        <Col>
          <Logo
            variants={NetflixVaiant}
            whileHover="active"
            initial="initial"
            xmlns="http://www.w3.org/2000/svg"
            width="1024"
            height="276.742"
            viewBox="0 0 1024 276.742"
          >
            <path
              stroke="white"
              strokeWidth="5px"
              d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
              fill="#d81f26"
            />
          </Logo>
          <Items>
            <Link to="/">
              <Item>
                Home
                {homeMatch ? <Circle layoutId="1" /> : null}
              </Item>
            </Link>
            <Link to="tv">
              <Item>
                Tv Shows
                {tvMatch ? <Circle layoutId="1" /> : null}
              </Item>
            </Link>
          </Items>
        </Col>
        <Col>
          <Search onSubmit={handleSubmit(onValid)}>
            <SearchLogo
              onClick={toggleSearch}
              animate={{
                x: searchOpen ? "-150px" : 0,
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              transition={{ type: "linear" }}
            >
              <path
                fill="white"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
              />
            </SearchLogo>
            <Input
              {...register("keyword", { required: true })}
              transition={{ type: "linear" }}
              initial={{ scaleX: 0 }}
              animate={searchAnimate}
              type="text"
              placeholder="search a movie or drama"
            />
          </Search>
        </Col>
      </Nav>
    </Wrapper>
  );
}

export default Header;
