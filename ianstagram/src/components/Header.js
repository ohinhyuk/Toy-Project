// import { AppBar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header(){

    return(
        <div>
            <NavBar />

            {/* <button><Link to="/">home</Link></button>
            <button><Link to="/message">message</Link></button>
            <button><Link to="/detail">detail</Link></button>
            <button><Link to="/profile">profile</Link></button>
            <button><Link to="/story">story</Link></button>
             */}
        </div>

        
    );
}


export default Header;