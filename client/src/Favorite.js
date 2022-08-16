import {useEffect, useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Favorite({ favorite, user }) {
    const [showComments, setShowComments] = useState([])
    const navigate = useNavigate()
    const { poem, id } = favorite

    function handleUnfavorite() {
        console.log("click!")
        fetch(`/favorites/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(p => {
            if(p.ok) {
                navigate(`/user/favorites`)
            } else {
                // p.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    return(
        <div>
            <ul>
            <h3>{poem.title}</h3>
            <h4>{poem.author}</h4>
            <p>{poem.lines?.map(line=>(
                <ul>{line}</ul>))}</p>
            <small>Linecount: {poem.linecount}</small>
            <br />
            <button onClick={handleUnfavorite}>Unfavorite</button>
            </ul>
        </div>
    )
}

export default Favorite;

