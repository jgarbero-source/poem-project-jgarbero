import { useEffect, useState } from "react";
import Poem from "./Poem.js"


function Poems({ user }) {
    const [poems, setPoems] = useState([])

    useEffect(() => {
        fetch("/poems")
          .then((r) => r.json())
          .then((r) => {
            setPoems(r);
            console.log(r);
          });
      }, []);

    return (
        <div>
            {poems.map((poem) => (
            <Poem key={poem.id} poem={poem} user={user}/>
            ))}
        </div>
    )

}

export default Poems;