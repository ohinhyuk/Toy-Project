import React, { useEffect, useState } from "react";
import ARouter from "components/Router";
import { authService } from "fbase";


function App() {
  const [init , setInit] = useState(false);
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  useEffect(()=>{
    authService.onAuthStateChanged((user) => {
    if(user){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
    console.log("This");
    console.log(init);
    setInit(true);
    
    })
  } , []);
  console.log(init);

  return (
    <>
    { init ? <ARouter isLoggedIn={isLoggedIn} /> : "Initializing..." }
    </>
  );
}

export default App;
