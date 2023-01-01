import { useEffect, useState } from "react";
import Button from "./Button";

function App() {

  const [counter , setCounter] = useState(0);
  const [text , setText] = useState("");

  const onClick = () => {
    setCounter(prev => prev+1);
  }

  const onChange = (event) =>{
    setText(event.target.value);
  }

  console.log("all time");

  useEffect(() =>{
    console.log("once time");
  } , [])

  useEffect(() => {
    console.log("counter time");
  } , [counter])

  useEffect(()=>{
    if(text.length > 5)
    console.log("text time");
  } , [text])

  return (
    <div>
      <h1>Welcome back!{counter}</h1>
      <input type="text" onChange={onChange}/>
      <Button onClick={onClick} text={"Button!"} />
    </div>

  );
}

export default App;
