import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "Pages/Main";
import Launch from "Pages/Launch";
import Detail from "Pages/Detail";

function Router() {
  return (
    <BrowserRouter basename={`${process.env.REACT_APP_BASE_URL}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/launch" element={<Launch />}></Route>
        <Route path={`/launch/:id`} element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
