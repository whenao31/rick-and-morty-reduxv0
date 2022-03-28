import React from "react";
import { NavLink } from 'react-router-dom'

function Navbar(){
    return(
        <>
            <ul>
                <li>
                    <NavLink to="/">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/home">Dashboard</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navbar;