import {useEffect, useState} from "react";
import Comment from "./Comment.js"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Poem({ poem, user, edit }) {
    const [showComments, setShowComments] = useState(false)
    const [noComments, setNoComments] = useState(true)
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({})
    const { title, author, lines, linecount, comments, poem_user } = poem
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
        if (comments) {
            setNoComments(!noComments)
        }
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
            {poem_user? 
            <small>Posted by: {poem_user.name}</small> : null }
            <br />
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={handleComments}>{showComments? "Hide Comments" : "Show Comments" }</Button>
            {showComments? 
                <div>
                    {comments.length>0?
                        <div>
                            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                        </div> : <p>There are no comments for this poem yet.</p>
                    }
                </div> : null }
            {user ? <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}><Link to="/comments/new" state={{poem: {poem}, user: {user}}}>Add a Comment</Link></Button> : null}
            {user ? <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={handleFavorite} endIcon={<FavoriteIcon/>}>Favorite</Button> : null }
            {edit?
            <>
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}><Link to="/poem/edit" state={{poem:{poem}}}>Edit Poem</Link></Button> 
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={handleDelete}>Delete Poem</Button>
            </> 
            : null}
        </ul>
        </div>
    )
}

export default Poem;