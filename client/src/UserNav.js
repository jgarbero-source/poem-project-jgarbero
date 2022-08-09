import React from "react";
import { NavLink } from "react-router-dom";

function UserNav() {

    return(
        <nav>
            <NavLink to="/user">
                <button>
                    User Info
                </button>
            </NavLink>
        </nav>
    )
}

export default UserNav;