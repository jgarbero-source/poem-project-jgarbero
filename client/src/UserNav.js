import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function UserNav({user}) {

    // const menuBtn = document.querySelector('.menu-btn')
    // let menuOpen = false;
    // menuBtn.addEventListener('click', () => {
    //     if(!menuOpen) {
    //         menuBtn.classList.add('open');
    //         menuOpen = true;
    //     } else {
    //         menuBtn.classList.remove('open');
    //         menuOpen = false;
    //     }
    // })



    return(
        <nav>
            <NavLink to="/user">
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>
                    {user.name}'s Info
                </Button>
            </NavLink>
            <NavLink to="/user/poems">
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>
                    {user.name}'s Poems
                </Button>
            </NavLink>
            <NavLink to="/user/favorites">
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>
                    {user.name}'s Favorite Poems
                </Button>
            </NavLink>
            <NavLink to="/user/comments">
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>
                    {user.name}'s Comments
                </Button>
            </NavLink>
        </nav>
    )
}

export default UserNav;