import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import Favorite from "./Favorite.js"
import { Grid } from "@mui/material";

function UserFavorites() {
  const [user, setUser] = useState([])
  const [favorites, setFavorites] = useState([])
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()
    
    useEffect(() => {
      async function getThem() {
        await fetch(`/me`).then((response) => {
          if (response.ok) {
            response.json().then((client) => {
              setUser(client);
              setFavorites(client.favorites)
            });
          } else {
            console.log("We're not rendering nothing pal");
          }
        });
      }
      getThem()
    }, []);

    function deleteFavorite(id) {
      setFavorites(current => current.filter(f => f.id !== id))
    }

    function handleUnfavorite(id) {
      console.log("click!")
      fetch(`/favorites/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
      })
      .then(p => {
          if(p.ok) {
              deleteFavorite(id)
              navigate(`/user/favorites`)
          } else {
              p.json().then(json => setErrors(Object.entries(json.errors)))
          }
      })
  }

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
                  <Favorite key={favorite.id} favorite={favorite} edit={true} user={user} setUser={setUser} handleUnfavorite={handleUnfavorite} errors={errors}/>
                </Grid>
              ))
          }
        </Grid>
        </div> : <h2>You don't have any favorites yet. Browse the selection of poems <Link to="/poems">here.</Link></h2>}
        </div>
    )
}

export default UserFavorites;