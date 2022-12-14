import './App.css';
import Login from "./Login.js";
import Header from "./Header.js";
import NavBar from "./Navbar.js";
import Signup from "./Signup.js";
import Poems from "./Poems.js";
import PoemsHome from './PeomsHome';
import User from "./User.js";
import UserNav from "./UserNav.js";
import UserEditForm from "./UserEditForm.js";
import UserComments from "./UserComments.js"
import NewCommentForm from "./NewCommentForm.js"
import UserCommentEditForm from "./UserCommentEditForm"
import UserPoems from "./UserPoems.js"
import WritePoem from "./WritePoem.js"
import UserPoemEditForm from './UserPoemEditForm';
import UserFavorites from './UserFavorites';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, NavLink, BrowserRouter } from "react-router-dom";
import { Button, Grid } from "@mui/material";


function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();

  function handleLogin(user) {
    setUser(user);
  }

  function doLogout() {
    navigate("/")
    setUser(null)
  }

  function deleteUser() {
    setUser(null)
    navigate("/")
  }

  function updateUser(updatedUser) {
    setUser(updatedUser)
  }

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((client) => {
          setUser(client);
        });
      } else {
        console.log("We're not rendering nothing pal");
      }
    });
  }, []);

  return (
    <div>
      <Header user={user} doLogout={doLogout} />
      <NavBar />
      {user? <UserNav user={user}/> : null }
      <Routes>
        <Route exact path="/" element={<PoemsHome user={user}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login handleLogin={handleLogin} />}/>
        <Route path="/poems" element={<Poems user={user}/>}/>
        <Route path="/user" element={<User user={user} deleteUser={deleteUser}/>}/>
        <Route path="/user/edit" element={<UserEditForm user={user} updateUser={updateUser}/>}/>
        <Route path='/user/comments' element={<UserComments user={user}/>}/>
        <Route path='/user/comments/:id' element={<UserCommentEditForm/>}/>
        <Route path="/comments/new" element={<NewCommentForm/>}/>
        <Route path="/user/poems" element={<UserPoems user={user}/>}/>
        <Route path="/poem/new" element={<WritePoem user={user}/>}/>
        <Route path="/poem/edit" element={<UserPoemEditForm user={user}/>}/>
        <Route path="/user/favorites" element={<UserFavorites user={user} setUser={setUser}/>}/>
      </Routes>

    </div>
  );
}

export default App;
