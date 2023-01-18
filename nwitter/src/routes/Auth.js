import React, { useState } from "react";

function Auth(){
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
    }
    const onChange = (event) => {
        const { target : {name , value}} = event;
        if( name === "email") setEmail(value);
        else if( name ==="password") setPassword(value);
        console.log(value);
    }

    return(
        <div>
            <h1>Autherization</h1>
            <form>
                <input name="email" type="email" onChange={onChange} value={email} placeholder="Email"/>
                <input name="password" type="password" onChange={onChange} value={password} placeholder="password"/>
                <input type="submit" value="Log In"/>
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
}

export default Auth;