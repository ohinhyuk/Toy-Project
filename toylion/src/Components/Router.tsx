import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Header from "./Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
