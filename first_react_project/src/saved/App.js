import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import Movie from "./components/Movie";
import Detail from "./routes/Detail"
import Home from "./routes/Home";

// coin
// function App() {

//   const [coins , setCoins] = useState("");
//   const [load, setLoad] = useState(true);
//   const [money , setMoney] = useState(0);
//   const [coinOne , setCoinOne] = useState(null);

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((response) => response.json())
//     .then((json) => {
//       setCoins(json);
//       setLoad(false);
//       console.log(json)
//     })
//   }
//   , [])

//   const onCoinChange = (event) =>{    
//     setCoinOne(event.target.value);
//   }


//   const onChange = (event) =>{
//     setMoney(event.target.value);
//   }
  
//   return (
    
//     <div>
//       <h1>Coins! {load ? "" : `( ${coins.length} 개)`}</h1>
      
    
//       {load ? <h3>Loading...!</h3> : null}
//       <select onChange={onCoinChange}> 
//       {load ? null : coins.map((coin,index) => 
//       (<option value={coin.quotes.USD.price} key={coin.id}>{coin.name} {coin.quotes.USD.price}</option>) 
        
//         )
//         }
//       </select>
//       <input type="number" value={money} onChange={onChange} placeholder="please input your money!"></input>
//       <h3>{parseInt(money) * parseInt(coinOne) }</h3>
//     </div>



//   );
// }


// movie
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
