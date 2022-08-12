import {useState} from "react";
import Comment from "./Comment.js"
import { Link, useNavigate } from "react-router-dom";

function Poem({ poem, user, edit }) {
    const [showComments, setShowComments] = useState(false)
    const [errors, setErrors] = useState([])
    const { title, author, lines, linecount, comments } = poem
    const navigate = useNavigate()

    function handleComments(){
        setShowComments(!showComments)
    }

    function handleDelete(e){
        e.preventDefault();
        fetch(`/poems/${poem.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
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

    return(
        <div>
        <ul>
        {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{lines?.map((line) => (
                <ul>{line}</ul>))}</p>
            <small>Linecount: {linecount}</small>
            <br />
            <button onClick={handleComments}>{showComments? "Hide Comments" : "Show Comments" }</button>
            {showComments? 
                <div>
                    {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                </div> : null }
            {user ? <button><Link to="/comments/new" state={{poem: {poem}, user: {user}}}>Add a Comment</Link></button> : null}
        </ul>
        {edit?
        <>
        <button><Link to="/poem/edit" state={{poem:{poem}}}>Edit Poem</Link></button> 
        <button onClick={handleDelete}>Delete Poem</button>
        </> 
        : null}
        </div>
    )
}

export default Poem;