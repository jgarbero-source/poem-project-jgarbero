import { useEffect, useState } from "react";
import {useNavigate, useLocation, Link} from 'react-router-dom';

function UserCom({comment}) {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    const { poem, content } = comment

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

    return(
        <div>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <li>{content}</li>
            <small> - Commented on: {poem.title} by {poem.author}</small>
            <br />
            <button><Link to="/user/comments/:id" state={{comment: {comment}}}>Edit Comment</Link></button>
            <button onClick={handleDelete}>Delete Comment</button>
        </div>
    )
}

export default UserCom;