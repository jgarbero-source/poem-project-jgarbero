import { useEffect, useState } from "react";
import {useNavigate, useLocation, Link} from 'react-router-dom';
import { Button } from "@mui/material";

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
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}><Link to="/user/comments/:id" state={{comment: {comment}, poem: {poem}}}>Edit Comment</Link></Button>
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={handleDelete}>Delete Comment</Button>
        </div>
    )
}

export default UserCom;