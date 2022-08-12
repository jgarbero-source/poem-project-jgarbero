import { useState, useEffect} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Poem from "./Poem.js"

function NewCommentForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([]);

    let starterFormData

    useEffect(() => {
        function start() {
            let starterFormData = {
                content: "",
                commenter_id: location.state.user.user.id,
                commented_poem_id: location.state.poem.poem.id
            }
        setFormData(starterFormData)
        }
        start();
    }, [])

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function goBack(e) {
        e.preventDefault();
        navigate(`/poems`);
      }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((c) => {
            if (c.ok) {
              c.json().then((comment) => {
                console.log(comment)
                navigate("/poems")
              });
            } else {
              c.json().then((json) => setErrors(Object.entries(json.errors)));
            }
        });
    }

    return(
        <div>
            <h2>Leave a comment for {location.state.poem.poem.title} by {location.state.poem.poem.author}</h2>
            <p>{location.state.poem.poem.lines?.map((line) => (
                <ul>{line}</ul>))}</p>
            <small>Linecount: {location.state.poem.poem.linecount}</small>
            {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
            <form onSubmit={handleSubmit}>
                <label>
                    Comment:
                    <textarea
                        type="text"
                        name="content"
                        placeholder="Comment here"
                        value={formData.content}
                        onChange={handleChange}
                    >
                    </textarea>
                </label>
                <button>Leave Comment</button>
                <button onClick={e=>goBack(e)}>Back</button>
            </form>
        </div>
    )
}

export default NewCommentForm;