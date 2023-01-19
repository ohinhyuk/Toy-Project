import { async } from "@firebase/util";
import { dbService } from "fbase";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

function Home(){

    const [nweet , setNweet] = useState("");
    const [nweets , setNweets] = useState([]);

    const getNweets = async () => {

    const querySnapshot = await getDocs(query(collection(dbService,"nweets")));
    querySnapshot.forEach((doc) => {
        
        const nweetObject = {
            ...doc.data(),
            id : doc.id,
        }
        setNweets((prev) => [  ...prev , nweetObject]);
});
}
    useEffect(() => {
        getNweets();
    }, [])

    const onSubmit = async (e) =>{
        e.preventDefault();
        try{
            const docRef = await addDoc(collection(dbService , "nweets") , {
                nweet,
                createdTime : Date.now(),
            });

            console.dir(docRef);
        }
        catch(error){
            console.log(error);
        }
        setNweet("");
    }
    const onChange = (e) => {
        const {target : {value}} = e;
        setNweet(value);
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type="text" placeholder="What's your mind??" maxLength={120} />
                <input type="submit" value="Nweet"></input>
            </form>
            {nweets.map( (nweet) => (<div key={nweet.id}>{nweet.nweet}</div>))}
        </div>
    );
}

export default Home;