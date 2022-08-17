import {useEffect, useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Poem from "./Poem.js"
import Comment from "./Comment.js";

function Favorite({ favorite, user }) {
    const [showComments, setShowComments] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { poem, id, comments, favorite_user } = favorite

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
                navigate(`/user`)
            } else {
                p.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    console.log(favorite)

    function handleComments(){
        setShowComments(!showComments)
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
            {favorite_user? 
            <small>Posted by: {favorite_user.name}</small> : null }
            <br />
            <button onClick={handleComments}>{showComments? "Hide Comments" : "Show Comments" }</button>
            {showComments? 
                <div>
                    {comments.length>0?
                        <div>
                            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                        </div> : <p>There are no comments for this poem yet.</p>
                    }
                </div> : null }
            <br />
            {user ? <button><Link to="/comments/new" state={{poem: {poem}, user: {user}}}>Add a Comment</Link></button> : null}
            <button onClick={handleUnfavorite}>Unfavorite</button>
            </ul>
        </div>
    )
}

export default Favorite;

