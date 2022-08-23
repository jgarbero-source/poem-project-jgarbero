import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
// import AppBar from '@material-ui/core/AppBar';



function Header({ user, doLogout }) {

    const navigate = useNavigate();

    const opening = [
        "Poetry is not a fancy way of giving you information, it's an incantation.",
        "It is actually a magic spell.",
        "It changes things; it changes you.",
        "- Philip Pullman"
    ]

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => doLogout());
    }
    console.log(user)

    return(
        <>
        <h1>Speaking in Poems</h1>
        <div>{opening.map((lines) => (
            <h4>{lines}</h4>
        ))}</div>
        {user ? null: <Link to="signup">
        <Button variant="outlined" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>Signup</Button></Link>}
        {user ? (
            <div>
                <h2>Welcome, {user.name}!</h2>
                <Button variant="outlined" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={handleLogout}>Logout
                </Button>
            </div>
        ) : (
            <Link to="/login">
                <Button variant="outlined" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>Login</Button>
            </Link>
        )}
        </>
    )

}

export default Header;