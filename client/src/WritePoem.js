import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function WritePoem({ user }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [lineState, setLineState] = useState("")
    const [lineTime, setLineTime] = useState(false)

    useEffect(() => {
        let starterFormData = {
            title: "",
            author: "",
            lines: [],
            linecount: null,
            user_id: null
        }
        setFormData(starterFormData);
    }, [])

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleLineChange(e) {
        const {value} = e.target
        setLineState(value)
    }

    function handleNextLine(e) {
        e.preventDefault()
        setLineTime(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitting")
    }

    function readyNewRecipe(){
        let toSend = formData
        toSend.user_id = user.id
        toSend.linecount = toSend.lines.length
        console.log(toSend)
        return toSend
    }

    return(
        <div>
            <h2>Submit your poem here:</h2>
            <form onSubmit={handleNextLine}>
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
                <label>
                    Author:
                    <input
                    type="text"
                    name="title"
                    placeholder="Author of Poem"
                    value={formData.author}
                    onChange={handleChange}
                    />
                </label>
                <br />
                {/* <label>
                    Lines:
                    <input
                    name="lines"
                    type="text"
                    placeholder="Poem line"
                    value={lineState}
                    onChange={handleLineChange}
                    />
                </label>
                <br /> */}
                {/* <label>
                    Linecount:
                    <input 
                    type="number"
                    name="linecount"
                    placeholder="e.g., 4"
                    value={formData.linecount}
                    onChange={handleChange}
                    />
                </label>
                <br /> */}
                <button>Add Poem Contents</button>
            </form>
            {lineTime?
                <div>
                    <form>
                        <label>
                            Lines:
                            <input
                            name="lines"
                            type="text"
                            placeholder="Poem line"
                            value={lineState}
                            onChange={handleLineChange}
                            />
                        </label>
                        <br />
                        <button>Add Next Line</button>
                    </form>
                </div>
            : null }
        </div>
    )
}

export default WritePoem;