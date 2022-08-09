import { useEffect, useState } from "react";
import Poem from "./Poem.js"

function Poems() {
    const [poems, setPoems] = useState([])

    useEffect(() => {
        fetch("/poems")
          .then((r) => r.json())
          .then((r) => {
            setPoems(r);
            console.log(r);
          });
      }, []);

    // const poemList = poems.map((poem) => (
    //     <Poem key={poem.id} poem={poem}/>
    // ))

    return (
        <div>
            {poems.map((poem) => (
            <Poem key={poem.id} poem={poem}/>
            ))}
        </div>
    )

}

export default Poems;