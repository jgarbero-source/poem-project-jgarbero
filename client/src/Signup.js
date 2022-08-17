import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { FormControl, Input, Button } from '@mui/material';

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

        fetch('/users',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    console.log(user)
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
        <FormControl>
            <Input 
                placeholder="Name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
            />
            <Input
                placeholder="Email"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <Input
                placeholder="Username"
                type='text'
                name='username' 
                value={username} 
                onChange={handleChange}
            />
            <Input
                placeholder="Password" 
                type='password' 
                name='password' 
                value={password} 
                onChange={handleChange}
            />
            <Input 
                placeholder="Bio"
                type="text"
                minRows="3"
                multiline={true}
                name='bio' 
                value={bio} 
                onChange={handleChange}
            />
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>Signup!</Button>
        </FormControl>
        </form>
        {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) : null }
        </>
    )
}

export default Signup;