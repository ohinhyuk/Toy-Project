const FETCH_URL = "https://api.coinpaprika.com/v1";

export function coinsFetcher() {
  return fetch(`${FETCH_URL}/coins`).then((response) => response.json());
}

export function infoFetcher(coinId: string) {
  return fetch(`${FETCH_URL}/coins/btc-bitcoin`).then((response) =>
    response.json()
  );
}

export function priceFetcher(coinId: string) {
  return fetch(`${FETCH_URL}/tickers/btc-bitcoin`).then((response) =>
    response.json()
  );
}

export function ohlFetcher(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=btc-bitcoin`
  ).then((res) => res.json());
}
