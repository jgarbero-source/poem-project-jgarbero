import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import AppBar from '@material-ui/core/AppBar';



function Header({ user, doLogout }) {

    const navigate = useNavigate();

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => doLogout());
    }

    return(
        <AppBar>
        <h1>The Poetry App</h1>
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
        </AppBar>
    )

}

export default Header;