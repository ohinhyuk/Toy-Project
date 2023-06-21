import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Header from "./Header";
import Launch from "../pages/Launch";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="launch" element={<Launch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
