import React from "react";
import { Link } from "react-router-dom";

function Header(){

    return(
        <div>
            <h1>Header</h1>

            <button><Link to="/">home</Link></button>
            <button><Link to="/message">message</Link></button>
            <button><Link to="/detail">detail</Link></button>
            <button><Link to="/profile">profile</Link></button>
            <button><Link to="/story">story</Link></button>
        </div>
    );
}


export default Header;