import { useEffect, useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import UserCom from './UserCom.js'

function UserComments() {
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState([])
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function goGetEm() {
            await fetch(`/me`)
                .then((user) => user.json())
                .then((user) => {
                    setComments(user.comments)
                    setUser(user)
                })
        }
        goGetEm()
    }, [])

    function deleteComment(id) {
        setComments(current => current.filter(c => c.id !== id))
    }

    function handleDelete(id) {
        fetch(`/comments/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then((c) => {
            if (c.ok) {
                deleteComment(id)
                navigate(`/user/comments`)
            } else {
                c.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    return(
        <div>
            <h2>{user.name}'s comments</h2>
            {comments? <div>            
                {comments.length > 0 ? (
                <div>
                    {comments.map((comment) => (
                        <UserCom key={comment.id} comment={comment} user={user} handleDelete={()=>handleDelete(comment.id)} errors={errors} />
                    ))}
                </div>
            ) : (
                <h3>You have no comments! Feel free to read our poems and comment on them!</h3>
            )}</div> : null}

        </div>
    )
}

export default UserComments;