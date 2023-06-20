import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Pages/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
