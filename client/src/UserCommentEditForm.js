import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormControl, Input, Button } from '@mui/material';
import { spacing } from '@mui/system';

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
            <h2>Edit your comment on {location.state.poem.poem.title} by {location.state.poem.poem.author}</h2>
            <p>{location.state.poem.poem.lines?.map((line) => (
                <ul>{line}</ul>))}</p>
            <small>Linecount: {location.state.poem.poem.linecount}</small>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <form onSubmit={handleSubmit}>
            <FormControl>
                <label>
                    Edit comment here:
                    <Input
                        sx={{ml:2}}
                        type="text"
                        name="content"
                        minRows="3"
                        multiline={true}
                        placeholder={formData.content}
                        value={formData.content}
                        onChange={handleChange}
                    />
                </label>
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>Save edit</Button>
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={e=>goBack(e)}>Back</Button>
              </FormControl>
            </form>
        </div>
    )
}

export default UserCommentEditForm