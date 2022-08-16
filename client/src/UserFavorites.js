import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Favorite from "./Favorite.js"
import Poem from "./Poem.js"

function UserFavorites({user, setUser}) {
    //map through favorites and send down the poem that way


    
    useEffect(() => {
        fetch(`/users/${user.id}`).then((response) => {
          if (response.ok) {
            response.json().then((client) => {
              setUser(client);
            });
          } else {
            console.log("We're not rendering nothing pal");
          }
        });
        
      }, []);

    const { favorites } = user



    return(
        <div>

        {favorites.length>0? 
        <div>
        {
            favorites.map(favorite => (
                <Favorite key={favorite.id} favorite={favorite} edit={true} user={user} setUser={setUser}/>
            ))
        }
        </div> : <h2>You don't have any favorites yet. Browse the selection of poems <Link to="/poems">here.</Link></h2>}
        </div>
    )
}

export default UserFavorites;