import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FormControl, Input, Button } from '@mui/material';
import { spacing } from '@mui/system';

function WritePoem({ user }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        let starterFormData = {
            title: "",
            author: "",
            lines: "",
            linecount: null,
            user_id: null
        }
        setFormData(starterFormData);
    }, [])

    function goBack(e) {
        e.preventDefault()
        navigate(`/user/poems`)
    }

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/poems', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(readyNewPoem())
        }).then((p) => {
            if (p.ok) {
                p.json().then((poem) => {
                    console.log(poem);
                    navigate('/user/poems')
                });
            } else {
                p.json().then((json) => setErrors(Object.entries(json.errors)));
            }
        })
    }

    function readyNewPoem(e){
        let toSend = formData
        toSend.user_id = user.id
        toSend.lines = toSend.lines.split("/")
        toSend.linecount = toSend.lines.length
        console.log(toSend)
        return toSend
    }

    return(
        <div>
            <h2>Submit your poem here:</h2>
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
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>Create Poem</Button>
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={e=>goBack(e)}>Back</Button>
            </FormControl>
            </form>
        </div>
    )
}

export default WritePoem;