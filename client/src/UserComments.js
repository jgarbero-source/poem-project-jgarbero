import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import UserCom from './UserCom.js'

function UserComments({user}) {
    const [userA, setUserA] = useState(user);
    const [comments, setComments] = useState([]);
    const [poems, setPoems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setUserA(user)
        fetch(`/users/${userA.id}`).then((resp) => {
          if (resp.ok) {
            resp.json().then((c) => {
              setComments(c.comments);
            });
          }
        });
        fetch('/poems').then((poem) => {
            if (poem.ok) {
              poem.json().then((poem) => {
                setPoems(poem);
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
                        <UserCom key={comment.id} poems={poems} comment={comment} user={userA} />
                    ))}
                </div>
            ) : (
                <h3>You have no comments! Feel free to read our poems and comment on them!</h3>
            )}
        </div>
    )
}

export default UserComments;