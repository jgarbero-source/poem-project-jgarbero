import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function User({user}) {

    

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