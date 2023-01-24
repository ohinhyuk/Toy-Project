import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import Page404 from "../routes/Page404";
import Header from "./Header";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
            <Routes>
              
                <Route path="/" element={<Home />} ></Route>
                <Route path="/detail" element={<Detail />}></Route>

                <Route path="*" element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
