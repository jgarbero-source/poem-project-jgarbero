import { useEffect, useState } from "react";
import Poem from "./Poem.js"
import SearchBar from "./SearchBar.js";


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
        <SearchBar handleSearch={handleSearch} />
            {updatedPoemDisplay.map((poem) => (
            <Poem key={poem.id} poem={poem} edit={false} user={user}/>
            ))}
        </div>
    )

}

export default Poems;