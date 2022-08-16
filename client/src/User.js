import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function User({ user, deleteUser }) {
    const [errors, setErrors] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const [alert, setAlert] = useState(false)

    function handleDelete() {
        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if(res.ok){
                deleteUser(params.id)
                navigate('/')
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
    }

    let userInfo;
    if (user) {
        const { name, username, email, bio } = user
        userInfo = 
            <div>
            <h2>Hello, {user.name}!</h2>
            <h3>Your profile info:</h3>
            <ul>
                <p>Name: {name}</p>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Bio: {bio}</p>
            </ul>
            <button><Link to={'/user/edit'}>Edit Profile</Link></button>
            <button onClick={handleDelete}>Delete Profile</button>
            </div>
        } else {
            userInfo = <h1>No user is logged in.</h1>
    }

    return(
        <div>
            {userInfo}
        </div>
    )
}

export default User;