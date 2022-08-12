import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserEditForm({ user, updateUser }) {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { name, email, username, password, bio } = user
    const [formData, setFormData] = useState({
        "name": name,
        "email": email,
        "username": username,
        "password": password,
        "bio": bio
    })

    function handleChange(e) {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function goBack(e){
        e.preventDefault()
        navigate(`/user`)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(updateUser)
                navigate('/user')
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
        navigate(`/user`)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" placeholder={name} value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="text" name="email" placeholder={email} value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" placeholder={"Choose a new password carefully..."} value={formData.password} onChange={handleChange} />
            </label>
            <label>
                Username:
                <input type="text" name="username" placeholder={username} value={formData.username} onChange={handleChange} />
            </label>
            <label>
                Bio:
                <textarea type="text" name="bio" placeholder={bio} value={formData.bio} onChange={handleChange} />
            </label>
            <button>Save</button>
            <button onClick={e=>goBack(e)}>Back</button>
            </form>
        </div>
    )
}

export default UserEditForm;