import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormControl, Input, Button } from '@mui/material';
import { spacing } from '@mui/system';


function UserPoemEditForm({user}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([])

    useEffect(() => {
        async function start(){
            let starterFormData = {
                "title": location.state.poem.poem.title,
                "author": location.state.poem.poem.author,
                "lines": location.state.poem.poem.lines.toString(),
                "linecount": location.state.poem.poem.linecount,
                "user_id": location.state.poem.poem.user_id
            }
            setFormData(starterFormData)
        }
        start()
    }, [])

    const lines = location.state.poem.poem.lines.toString()

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function readyUpdatePoem(){
        let toSend = formData
        toSend.lines = toSend.lines.split("/")
        toSend.linecount = toSend.lines.length
        console.log(toSend)
        return toSend
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/poems/${location.state.poem.poem.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(readyUpdatePoem())
        })
        .then(p => {
            if (p.ok) {
                navigate(`/user/poems`)
            } else {
                p.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    function goBack(e) {
        e.preventDefault();
        navigate(`/user/poems`);
    }

    return(
        <div>
            <h2>Update your poem here:</h2>
            {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
            <form onSubmit={handleSubmit}>
            <FormControl>
                <label>
                    Title: 
                    <Input
                    sx={{ml:2}}
                    type="text"
                    name="title"
                    placeholder="Poem Title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Author:
                    <Input
                    sx={{ml:2}}
                    type="text"
                    name="author"
                    placeholder="Author of Poem"
                    value={formData.author}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <h3>NOTE: Please indicate line separation with the '/' symbol in your poem.</h3>
                <br />
                <label>
                    Poem Contents:
                    <Input
                    sx={{ml:2}}
                    name="lines"
                    type="text"
                    minRows="3"
                    multiline={true}
                    placeholder="Write Poem Here"
                    value={formData.lines}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>Update Poem</Button>
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={e=>goBack(e)}>Back</Button>
            </FormControl>
            </form>
        </div>
    )
}

export default UserPoemEditForm;