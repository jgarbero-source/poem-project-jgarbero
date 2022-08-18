import React from "react";
import { Input } from "@mui/material";

function SearchBar({handleSearch}) {

    return(
        <div>
            Search by Title or Author:
            <Input
                sx={{ml:2}}
                type="text"
                placeholder="Title or Author"
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar;