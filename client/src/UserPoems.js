import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Poem from "./Poem.js"

function UserPoems({user}) {
    const [userPoems, setUserPoems] = useState([])

    useEffect(() => {
        async function goGetEm() {
            await fetch(`/users/${user.id}`)
                .then((p) => p.json())
                .then((p) => {
                    setUserPoems(p.poems)
                })
        }
        goGetEm()
    }, [user.id])

    return(
        <>
        {userPoems.length>0? 
            <div>
                <h1>{user.name}'s Submitted Poems</h1>
                <h2>Feel free to post another one <Link to="/poem/new">here.</Link></h2>
                {userPoems.map((poem) => (
                    <Poem key={poem.id} poem={poem} edit={true}/>
                ))}
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