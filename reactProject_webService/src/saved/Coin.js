import { useEffect, useState } from "react";
import styles from "./Coin.module.css";

function Coin(){

    const [toDos , setToDos] = useState([]);
    const [toDo , setToDo] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        setToDos(prev => [ toDo , ...prev]);
        setToDo("");
    }

    const onChange = (event) => {
        setToDo(event.target.value);
    }

    const onClick = (event) => {
        const li = event.target.parentElement;
        setToDos(toDos.filter((item,idx) => idx !== parseInt(li.id) ));
        
        
    }

    console.log(toDos);

    return(
        <div>
            <form onSubmit={onSubmit}>
            <input className={styles.ipt} value={toDo} onChange={onChange}></input>
            </form>

            <ul>
                {toDos.map( (item,index) => <li id={index} key={index}>{item}
                <button type="button" onClick={onClick}>delete</button>
                </li>)}
            </ul>
        </div>
    );
}

export default Coin;