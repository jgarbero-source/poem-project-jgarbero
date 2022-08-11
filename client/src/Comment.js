import { useState, useEffect} from 'react'

function Comment({comment}) {
    const [thisUser, setThisUser] = useState({})

    useEffect(()=>{
        fetch(`/users/${comment.commenter_id}`)
        .then(resp => resp.json())
        .then(r => setThisUser(r))
    },[])

    return(
        <>
            <li>{comment.content}</li>
            <small>- {thisUser.name}</small>
        </>
    )
}

export default Comment;