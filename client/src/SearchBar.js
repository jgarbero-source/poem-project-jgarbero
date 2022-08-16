import React from "react";

function SearchBar({handleSearch}) {

    return(
        <div>
            Search by Title or Author:
            <input
                type="text"
                placeholder="Title or Author"
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar;