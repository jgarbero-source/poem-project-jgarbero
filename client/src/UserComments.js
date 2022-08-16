import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import UserCom from './UserCom.js'

function UserComments({user}) {
    const [comments, setComments] = useState([]);
    const [poems, setPoems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch(`/users/${user.id}`).then((resp) => {
          if (resp.ok) {
            resp.json().then((c) => {
              setComments(c.comments);
            });
          }
        });
    }, [])

    return(
        <div>
            <h2>{user.name}'s comments</h2>
            {comments.length > 0 ? (
                <div>
                    {comments.map((comment) => (
                        <UserCom key={comment.id} comment={comment} user={user} />
                    ))}
                </div>
            ) : (
                <h3>You have no comments! Feel free to read our poems and comment on them!</h3>
            )}
        </div>
    )
}

export default UserComments;