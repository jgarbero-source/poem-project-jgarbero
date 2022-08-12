import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function UserCommentEditForm({comment}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([])

    useEffect(() => {
        async function start(){
            let starterFormData = {
                "content": location.state.comment.comment.content
            }
        setFormData(starterFormData)
        }
    start()
    }, [])

    function goBack(e) {
      e.preventDefault();
      navigate(`/user/comments`);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/comments/${location.state.comment.comment.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData)
        })
        .then((c) => {
          if (c.ok) {
            c.json().then((comment) => 
            {
              console.log(comment)
              navigate(`/user/comments`);
            })
          } else {
            c.json().then(json => setErrors(Object.entries(json.errors)))
          }
        });
    }

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return(
        <div>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <h2>Hey there!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Edit comment here:
                    <textarea
                        type="text"
                        name="content"
                        placeholder={formData.content}
                        value={formData.content}
                        onChange={handleChange}
                    />
                </label>
                <button>Save edit</button>
                <button onClick={e=>goBack(e)}>Back</button>
            </form>
        </div>
    )
}

export default UserCommentEditForm