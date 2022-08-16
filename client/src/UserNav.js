import React from "react";
import { NavLink } from "react-router-dom";

function UserNav({user}) {

    return(
        <nav>
            <NavLink to="/user">
                <button>
                    {user.name}'s Info
                </button>
            </NavLink>
            <NavLink to="/user/poems">
                <button>
                    {user.name}'s Poems
                </button>
            </NavLink>
            <NavLink to="/user/favorites">
                <button>
                    {user.name}'s Favorite Poems
                </button>
            </NavLink>
            <NavLink to="/user/comments">
                <button>
                    {user.name}'s Comments
                </button>
            </NavLink>

        </nav>
    )
}

export default UserNav;