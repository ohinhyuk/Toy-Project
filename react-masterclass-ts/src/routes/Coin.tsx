import { useEffect, useState } from "react";
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

  const [info, setInfo] = useState<IInfo>();
  const [priceData, setPriceData] = useState<IPrice>();

  useEffect(() => {
    (async () => {
      const fetchedInfo = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/btc-bitcoin`)
      ).json();

      const fetchedPriceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/btc-bitcoin`)
      ).json();

      setInfo(fetchedInfo);
      setPriceData(fetchedPriceData);
      setLoading(false);
      console.log(fetchedInfo, fetchedPriceData);
    })();
  }, []);

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
