import {useState} from "react";

function Poem({poem}) {

    const { title, author, lines, linecount } = poem

    return(
        <ul>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{lines?.map((line) => (
                <ul>{line}</ul>))}</p>
            <small>Linecount: {linecount}</small>
        </ul>
    )
}

export default Poem;