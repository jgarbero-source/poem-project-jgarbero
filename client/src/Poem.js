import {useState} from "react";
import Comment from "./Comment.js"
import { Link } from "react-router-dom";

function Poem({poem, user }) {
    const [showComments, setShowComments] = useState(false)
    const { title, author, lines, linecount, comments } = poem

    function handleComments(){
        setShowComments(!showComments)
    }

    return(
        <ul>
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
    )
}

export default Poem;