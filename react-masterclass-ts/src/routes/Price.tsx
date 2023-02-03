import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { ohlFetcher } from "../api";
import Chart from "react-apexcharts";
import styled from "styled-components";

interface IOutlet {
  coinId: string;
}

interface IData {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

const Loading = styled.div`
  display: block;
`;
function Price() {
  const { coinId } = useOutletContext<IOutlet>();

  const { isLoading, data } = useQuery<IData[]>(["ohikl", coinId], () =>
    ohlFetcher(coinId)
  );

  return (
    <div>
      {isLoading ? (
        <Loading>loading</Loading>
      ) : (
        <Chart
          type="line"
          series={[
            {
              name: "price",
              // data: data?.map((element) => Number(element.close)) as number[],
              data: [1, 2, 3],
            },
          ]}
          options={
            {
              // chart: { toolbar: { show: false } },
            }
          }
          width="300"
          height="200"
        ></Chart>
        // <div>dd</div>
      )}
    </div>
  );
}

export default Price;
