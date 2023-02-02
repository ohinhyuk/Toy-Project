import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { coinsFetcher } from "../api";

const CoinImage = styled.img`
  width: 35px;
  height: 35px;
  margin: 0px 10px;
`;
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

const Coinlist = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 10px;
  margin: 20px 20px;
  border-radius: 10px;
  font-size: 1.3rem;
  a {
    transition: color 0.5s;
  }
  a {
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
    display: flex;
    padding: 10px 0px;
    align-items: center;
  }
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<CoinInterface[]>(
    ["allCoins"],
    coinsFetcher
  );

  //   const [coins, setCoins] = useState<CoinInterface[]>([]);
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //       const json = await response.json();
  //       setCoins(json.slice(0, 100));
  //       setLoading(false);
  //     })();
  //   }, []);

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>

      {isLoading ? (
        <Loading>loading...</Loading>
      ) : (
        <Coinlist>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={`/${coin.name}`}
                state={{
                  name: coin.name,
                }}
              >
                <CoinImage
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name}
              </Link>
            </Coin>
          ))}
        </Coinlist>
      )}
    </Container>
  );
}

export default Coins;
