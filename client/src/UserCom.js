import { useEffect, useState } from "react";
import {useNavigate, useLocation, Link} from 'react-router-dom';
import { Button } from "@mui/material";

function UserCom({comment, handleDelete, errors}) {

    const { poem, content } = comment

    return(
        <div>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <li>{content}</li>
            <small> - Commented on: {poem.title} by {poem.author}</small>
            <br />
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}><Link to="/user/comments/:id" state={{comment: {comment}, poem: {poem}}}>Edit Comment</Link></Button>
            <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={handleDelete}>Delete Comment</Button>
        </div>
    )
}

export default UserCom;