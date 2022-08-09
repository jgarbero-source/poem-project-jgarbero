import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <NavLink end to="/">
                <button>Home</button>
            </NavLink>
            <NavLink end to="/poems">
                <button>All Poems</button>
            </NavLink>

        </nav>
    )
}

export default NavBar;