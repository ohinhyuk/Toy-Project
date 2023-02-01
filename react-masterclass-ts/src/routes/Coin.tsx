import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface LocationInterface {
  state: {
    name: string;
  };
}

const Loading = styled.div`
  text-align: center;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
`;

function Coin() {
  const [loading, setLoading] = useState(true);
  // const {coinId} = useParams();
  const { state } = useLocation() as LocationInterface;
  // console.log(name);
  const { coinId } = useParams<{ coinId: string }>();

  return (
    <Container>
      <Header>
        <Title>Coin : {state?.name || "loading..."}</Title>
      </Header>

      {loading ? <Loading>loading...</Loading> : null}
    </Container>
  );
}

export default Coin;
