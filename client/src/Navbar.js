import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function NavBar() {
    return(
        <nav>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
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