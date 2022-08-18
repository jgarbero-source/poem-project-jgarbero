import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Favorite from "./Favorite.js"
import { Grid } from "@mui/material";

function UserFavorites({user, setUser}) {
    
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
          <h2>Your favorite poems:</h2>
        <br />
        <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
          {
              favorites.map(favorite => (
                <Grid justifyContent="space-evenly" alignItems="center" item xs={6} key={favorite.id}>
                  <Favorite key={favorite.id} favorite={favorite} edit={true} user={user} setUser={setUser}/>
                </Grid>
              ))
          }
        </Grid>
        </div> : <h2>You don't have any favorites yet. Browse the selection of poems <Link to="/poems">here.</Link></h2>}
        </div>
    )
}

export default UserFavorites;