import {useEffect, useState} from "react";
import Comment from "./Comment.js"
import { Link, useNavigate } from "react-router-dom";

function Poem({ poem, user, edit }) {
    const [showComments, setShowComments] = useState(false)
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({})
    const { title, author, lines, linecount, comments } = poem
    const navigate = useNavigate()

    useEffect(() => {
        let starterFormData = {
            like: false,
            fav_user_id: null,
            fav_poem_id: null
        }
        setFormData(starterFormData)
    }, [])

    function newFavorite() {
        let toSend = formData
        toSend.like = !toSend.like
        toSend.fav_user_id = user.id
        toSend.fav_poem_id = poem.id
        return toSend
    }

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

    function handleFavorite(e) {
        e.preventDefault();
        fetch(`/favorites`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFavorite())
        })
    //     .then(f => {
    //         if (f.ok) {
    //             f.json().then((favorite) => {
    //                 console.log(favorite)
    //             });
    //         } else {
    //             console.log("Didn't work!")
    //         }
    //     }
    // )

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
            {user ? <button onClick={handleFavorite}>Favorite</button> : null }
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