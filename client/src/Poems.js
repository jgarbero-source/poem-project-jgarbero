import { useEffect, useState } from "react";
import Poem from "./Poem.js"
import SearchBar from "./SearchBar.js";
import { Grid } from "@mui/material";


function Poems({ user }) {
    const [poems, setPoems] = useState([])
    const [search, setSearch] = useState("")

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    const updatedPoemDisplay = poems.filter(poem => poem.title.toLowerCase().includes(search.toLowerCase()) || poem.author.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        fetch("/poems")
          .then((r) => r.json())
          .then((r) => {
            setPoems(r);
          });
      }, []);

    return (
        <div>
            <h2>All Poems</h2>
            <SearchBar handleSearch={handleSearch} />
            <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
                {updatedPoemDisplay.map((poem) => (
                    <Grid justifyContent="space-evenly" alignItems="center" item xs={6} key={poem.id}>
                        <Poem key={poem.id} poem={poem} edit={false} user={user}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )

}

export default Poems;