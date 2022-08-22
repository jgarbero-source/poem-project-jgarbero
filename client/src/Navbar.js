import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function NavBar() {
    return(
        <nav>
            <NavLink end to="/">
                <Button variant="outlined" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>Home</Button>
            </NavLink>
            <NavLink end to="/poems">
                <Button variant="outlined" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>Poems</Button>
            </NavLink>
        </nav>
    )
}

export default NavBar;