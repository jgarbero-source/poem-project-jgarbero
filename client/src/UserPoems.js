import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Poem from "./Poem.js"
import { Grid } from "@mui/material";

function UserPoems() {
    const [userPoems, setUserPoems] = useState([])
    const [user, setUser] = useState([])
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function goGetEm() {
            await fetch(`/me`)
                .then((p) => p.json())
                .then((p) => {
                    setUserPoems(p.poems)
                    setUser(p)
                })
        }
        goGetEm()
    }, [])

    function deleteUserPoem(id) {
        setUserPoems(current => current.filter(p => p.id !== id))
    }

    function handleDelete(id){
        fetch(`/poems/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then(p => {
            if(p.ok) {
                deleteUserPoem(id)
                navigate(`/user/poems`)
            } else {
                p.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    return(
        <>
        {userPoems.length>0? 
            <div>
                <h1>{user.name}'s Submitted Poems</h1>
                <h2>Feel free to post another one <Link to="/poem/new">here.</Link></h2>
                <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
                    {userPoems.map((poem) => (
                        <Grid justifyContent="space-evenly" alignItems="center" item xs={6} key={poem.id}>
                            <Poem key={poem.id} poem={poem} edit={true} handleDelete={handleDelete}/>
                        </Grid>
                    ))}
                </Grid>
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