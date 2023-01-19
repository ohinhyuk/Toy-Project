import { authService } from "fbase";
import React, { useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword , GoogleAuthProvider,GithubAuthProvider , signInWithPopup} from 'firebase/auth';
import { async } from "@firebase/util";

function Auth(){
    const [newAccount , setNewAccount] = useState(true);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState("");

    const onSubmit = async (event)  =>  {
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                data = await createUserWithEmailAndPassword(authService, email , password);
            } else {
                data = await signInWithEmailAndPassword(authService,email , password);
            }
            console.log(data);
        }
        catch(error){
            setError(error.message);
        }
         
    };
    const onChange = (event) => {
        const { target : {name , value}} = event;
        if( name === "email") setEmail(value);
        else if( name ==="password") setPassword(value);
        console.log(value);
    }

    const toggleAccount = () => setNewAccount(prev => !prev);

    const onClick = async (event) => {
        const {
            target: { name },
            } = event;

            let provider;

            if (name === "google") {
            provider = new GoogleAuthProvider();
            } else if (name === "github") {
            provider = new GithubAuthProvider();
            }
            await signInWithPopup(authService, provider);
            };
            
        // const data = await signInWithPopup(authService, provider) // popup을 이용한 signup
        
        
    
    // };

    return(
        <div>
            <h1>Autherization</h1>
            <form onSubmit={onSubmit} >
                <input name="email" type="email" onChange={onChange} value={email} placeholder="Email"/>
                <input name="password" type="password" onChange={onChange} value={password} placeholder="password"/>
                <input type="submit" value={newAccount ? "Create New Account": "Log In"}/>
            </form>
            {error}<br></br>
            <span onClick={toggleAccount}>
                {newAccount ? "Sign in" : "Create new Account"}
            </span>
            <div>
                <button name="google" onClick={onClick}>Continue with Google</button>
                <button name="github" onClick={onClick}>Continue with Github</button>
            </div>
        </div>
    );
}

export default Auth;