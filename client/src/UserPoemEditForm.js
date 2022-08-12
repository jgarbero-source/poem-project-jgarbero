import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
                <label>
                    Title:
                    <input
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
                    <input
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
                <label>
                    Poem Contents:
                    <textarea
                    name="lines"
                    type="text"
                    placeholder="Write Poem Here"
                    value={formData.lines}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <button>Update Poem</button>
                <button onClick={e=>goBack(e)}>Back</button>
            </form>
        </div>
    )
}

export default UserPoemEditForm;