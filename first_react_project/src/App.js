import { useEffect, useState } from "react";
import Button from "./Button";

function App() {

  const [value,setValue] = useState("");
  const [toDos , setToDos] = useState([]);

  const onChange = (event) =>{
    setValue(event.target.value);
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    if(value !== ""){
      setToDos(currentToDos => [ value, ...currentToDos]);  
      setValue("");
    }
  }

  const handleDelete = (idx) => {
    // const li = event.target.parentElement;
    // console.log(li);
    setToDos(prev => prev.filter((item,index) => index !== idx ));
    
  }
  // console.log(toDos);
  useEffect(()=>console.log(toDos),[toDos]);
  return (
    <div>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} placeholder="please enter your toDo" />
      <button>Submit</button>
      </form>
      <ul>
        {toDos.map((item,index) => (
          <li key={index}>{item}<button onClick={ () => handleDelete(index)}>X</button></li>
          ))}
      </ul>
    </div>

  );
}

export default App;
