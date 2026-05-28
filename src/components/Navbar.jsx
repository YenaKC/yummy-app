import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div id="nav">
            <div>
                <img className="logo" src="../img/yummy-logo.png" alt="Yummy app Logo" />
            </div>
            <nav>
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/dashboard">Dashboard</Link>
                <Link to ="/recipe">Recipe Details</Link>
            </nav>
        </div>
    )
}