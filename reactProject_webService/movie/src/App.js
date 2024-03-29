import Home from "./routes/Home";
import Detail from "./routes/Detail";

// import { useEffect, useState, useSyncExternalStore } from "react";
// import Button from "./component/Button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(){
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      
      <Route path="/movie/:id" element={ <Detail />}/>
    </Routes>
  </Router>
  );
}

export default App;