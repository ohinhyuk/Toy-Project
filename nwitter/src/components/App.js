import React, { useState } from "react";
import ARouter from "components/Router";
import { authService } from "fbase";


function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(authService.currentUser !== null);
  return (
    <ARouter isLoggedIn={isLoggedIn}/>
    
  );
}

export default App;
