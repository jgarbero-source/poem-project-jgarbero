import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function UserNav({user}) {

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