import { useEffect, useState } from "react";
import {useNavigate, useLocation, Link} from 'react-router-dom';

function UserCom({comment, poems, user}) {
    const [thesePoems, setThesePoems] = useState(poems)
    const [thisComment, setThisComment] = useState(comment)
    const [commentedPoems, setCommentedPoems] = useState(null)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    let commentedPoem

    useEffect(() => {
        setThesePoems(poems)
        setThisComment(comment)
        thesePoems.forEach(poem => {
            if(poem.id ===thisComment.poem_id){
                setCommentedPoems(poem)
            }
        })
    }, [])

    function handleDelete() {
        fetch(`/comments/${comment.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then((c) => {
            if (c.ok) {
                navigate(`/user`)
            } else {
                c.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }


    // const userPoems = poems.filter(poem => poem.id === comment.poem_id)
    // console.log(userPoems)

    return(
        <div>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <li>{comment.content}</li>
            <button><Link to="/user/comments/:id" state={{comment: {comment}}}>Edit Comment</Link></button>
            <button onClick={handleDelete}>Delete Comment</button>
            {/* <small>commented on "{commentedPoems.title}"</small> */}
        </div>
    )
}

export default UserCom;