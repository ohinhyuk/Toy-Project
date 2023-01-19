import { authService } from "fbase";
import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";





const Navigation = () => {

    const navigate = useNavigate();

    const onClick = () => {

        authService.signOut();
        navigate("/");
    
    }

    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">My Profile</Link>
                </li>
                <li>
                    <button onClick={onClick}>Log Out</button>
                </li>
            </ul>
        </nav>
    ); 
}

export default Navigation;