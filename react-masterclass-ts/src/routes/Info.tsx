import { useQuery } from "react-query";
import { redirect, useOutletContext } from "react-router-dom";
import { ohlFetcher } from "../api";
import Chart from "react-apexcharts";
import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../Atoms";

interface Iohl {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

interface IOutletContext {
  coinId: string;
}

function Info() {
  const isDark = useRecoilValue(isDarkAtom);
  const { coinId } = useOutletContext<IOutletContext>();

  const { isLoading, data } = useQuery<Iohl[]>(
    ["ohl", coinId],
    () => ohlFetcher(coinId),
    {
      refetchInterval: 5000,
    }
  );

  // console.log(data);
  return (
    <div>
      <Helmet>
        <title>hello!</title>
      </Helmet>
      {!isLoading ? (
        <Chart
          type="line"
          series={[
            {
              name: "coinPrice",
              data: data?.map((element) => Number(element.close)) as number[],
            },
          ]}
          options={{
            chart: {
              toolbar: { show: false },
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            xaxis: {
              type: "datetime",
              labels: { show: false },
              categories: data?.map((price) => price.time_close / 1000),
            },
            yaxis: { show: false },
            grid: {
              show: false,
            },
            fill: {
              type: "gradient",

              gradient: {
                gradientToColors: ["blue"],
                stops: [0, 100],
              },

              colors: ["red"],
            },
          }}
          width="500"
          height="300"
        ></Chart>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Info;
