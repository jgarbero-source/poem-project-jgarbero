import { useEffect, useState } from "react";
import Poem from "./Poem.js"


function Poems({ user }) {
    const [poems, setPoems] = useState([])

    useEffect(() => {
        fetch("/poems")
          .then((r) => r.json())
          .then((r) => {
            setPoems(r);
          });
      }, []);

    return (
        <div>
            {poems.map((poem) => (
            <Poem key={poem.id} poem={poem} edit={false} user={user}/>
            ))}
        </div>
    )

}

export default Poems;