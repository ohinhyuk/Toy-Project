import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { infoFetcher, priceFetcher } from "../api";
import { isDarkAtom } from "../Atoms";
import Info from "./Info";
import Price from "./Price";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: ${(props) => props.theme.bgColor}; */
  background-color: black;
  padding: 15px;
  border-radius: 5px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span:first-child {
    font-size: 5px;
    color: ${(props) => props.theme.textColor};
  }

  span:last-child {
    font-size: 15px;
    color: ${(props) => props.theme.textColor};
  }
`;

const ExplainationBox = styled.div`
  color: ${(props) => props.theme.textColor};
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 25px;
`;

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
  display: flex;
  flex-direction: column;
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

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 20px;
  gap: 10px;
`;
const Tab = styled.span<{ isMatched: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0);
  padding: 10px 0px;
  border-radius: 5px;
  color: ${(props) =>
    props.isMatched ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

function Coin() {
  // const [loading, setLoading] = useState(true);
  // const {coinId} = useParams();
  const { state } = useLocation() as LocationInterface;
  // console.log(name);
  const { coinId } = useParams<{ coinId: string }>();

  const { isLoading: infoLoading, data: infoData } = useQuery<IInfo>(
    ["info", coinId],
    () => infoFetcher(coinId ? coinId : "")
  );

  const { isLoading: priceLoading, data: priceData } = useQuery<IPrice>(
    ["price", coinId],
    () => priceFetcher(coinId ? coinId : "")
  );

  const loading = priceLoading || infoLoading;
  // const [info, setInfo] = useState<IInfo>();
  // const [priceData, setPriceData] = useState<IPrice>();

  // useEffect(() => {
  //   (async () => {
  //     const fetchedInfo = await (
  //       await fetch(`https://api.coinpaprika.com/v1/coins/btc-bitcoin`)
  //     ).json();

  //     const fetchedPriceData = await (
  //       await fetch(`https://api.coinpaprika.com/v1/tickers/btc-bitcoin`)
  //     ).json();

  //     setInfo(fetchedInfo);
  //     setPriceData(fetchedPriceData);
  //     setLoading(false);
  //     console.log(fetchedInfo, fetchedPriceData);
  //   })();
  // }, []);

  interface IInfo {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
  }

  interface IPrice {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_15m: number;
        percent_change_30m: number;
        percent_change_1h: number;
        percent_change_6h: number;
        percent_change_12h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        percent_change_30d: number;
        percent_change_1y: number;
        ath_price: number;
        ath_date: string;
        percent_from_price_ath: number;
      };
    };
  }

  const matchInfo = useMatch(`${coinId}/info`);
  const matchPrice = useMatch(`${coinId}/price`);

  const setIsDarkAtom = useSetRecoilState(isDarkAtom);
  const onClick = () => setIsDarkAtom((prev) => !prev);

  return (
    <Container>
      <Header>
        <Title>Coin : {state?.name || "loading..."}</Title>
        <button onClick={onClick}>change mode</button>
      </Header>

      {loading ? (
        <Loading>loading...</Loading>
      ) : (
        <Container>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>SYMBOL:</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>OPENSOURCE:</span>
              <span>{infoData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <ExplainationBox>{infoData?.description}</ExplainationBox>
          <Overview>
            <OverviewItem>
              <span>TOTAL SUPLY:</span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>MAX SUPPLY:</span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
        </Container>
      )}

      <Tabs>
        <Tab isMatched={matchPrice !== null}>
          <Link to={`/${coinId}/price`}>price</Link>
        </Tab>
        <Tab isMatched={matchInfo !== null}>
          <Link to={`/${coinId}/info`}>Info</Link>
        </Tab>
      </Tabs>

      <Outlet context={{ coinId }} />
    </Container>
  );
}

export default Coin;
