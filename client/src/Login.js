import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FormControl, Input, Button } from '@mui/material';

function Login({ handleLogin }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const { username, password } = formData

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => 
              {
                handleLogin(user)
                navigate('/') //change to user
              })
            } else {
              r.json().then(json => setErrors(Object.entries(json.errors)))
            }
        });
        setFormData({
            username: '',
            password: ''
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <FormControl>
                <Input
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>Login</Button>
            </FormControl>
            </form>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
        </div>
    )
}

export default Login;