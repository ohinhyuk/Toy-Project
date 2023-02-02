import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Info from "./routes/Info";
import Price from "./routes/Price";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/" element={<Coin />}>
          <Route path={`price`} element={<Price />} />
          <Route path={`info`} element={<Info />} />
        </Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
