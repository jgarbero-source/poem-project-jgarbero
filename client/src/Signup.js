import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        bio: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const { name, email, username, password, bio } = formData

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // const user = {
        //     name, 
        //     email,
        //     username,
        //     email,
        //     bio
        // }

        fetch('/users',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    navigate(`/login`)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
        setFormData({
            name: '',
            email: '',
            username: '',
            password: '',
            bio: ''
        })
    }

    return(
        <>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
            />
            <input
                placeholder="Email"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <input
                placeholder="Username"
                type='text'
                name='username' 
                value={username} 
                onChange={handleChange}
            />
            <input
                placeholder="Password" 
                type='password' 
                name='password' 
                value={password} 
                onChange={handleChange}
            />
            <textarea 
                placeholder="Bio"
                type="text"
                rows="4"
                cols="25"
                name='bio' 
                value={bio} 
                onChange={handleChange}
            />
            <button
                type="submit"
            >
                Signup! 
            </button>
        </form>
        {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) : null }
        </>
    )
}

export default Signup;