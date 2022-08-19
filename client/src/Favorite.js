import {useEffect, useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Comment from "./Comment.js";

function Favorite({ favorite, user, handleUnfavorite, errors }) {
    const [showComments, setShowComments] = useState(false)
    const { poem, id, comments, favorite_user } = favorite

    function handleComments(){
        setShowComments(!showComments)
    }

    return(
        <div>
            <ul>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <h3>{poem.title}</h3>
            <h4>{poem.author}</h4>
            <p>{poem.lines?.map(line=>(
                <ul>{line}</ul>))}</p>
            <small>Linecount: {poem.linecount}</small>
            <br />
            {favorite_user? 
            <small>Posted by: {favorite_user.name}</small> : null }
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
            <br />
            {user ? <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}><Link to="/comments/new" state={{poem: {poem}, user: {user}}}>Add a Comment</Link></Button> : null}
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={() => handleUnfavorite(id)} endIcon={<FavoriteBorderIcon/>}>Unfavorite</Button>
            </ul>
        </div>
    )
}

export default Favorite;

