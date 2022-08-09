import { useEffect, useState } from "react";
import Poem from "./Poem.js"

function PoemsHome() {
    const [poem, setPoem] = useState([])

    useEffect(() => {
        fetch("/poems")
          .then((r) => r.json())
          .then((r) => {
            setPoem(setFeatured(r));
          });

      }, []);

    function setFeatured(data) {
        let featuredPoem = data[Math.floor(Math.random()*data.length)]
        return featuredPoem
    }

    console.log(poem)

    const { title, author, lines, linecount } = poem

    return(
        <div>
            <h2>Featured Poem</h2>
            <Poem key={poem.id} poem={poem}/>
        </div>
    )
}

export default PoemsHome;