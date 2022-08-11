import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function UserPoems() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([]);
    const [userPoems, setUserPoems] = useState([])

    console.log(userPoems)

    return(
        <>
        {userPoems===[]? 
            <div>
                <h1>here are your poems</h1>
            </div>
        :
            <div>
                <h2>You don't have any poems written. You can write one <Link to="/poem/new">here.</Link></h2>
            </div>
        }

        </>
        
    )
}

export default UserPoems;