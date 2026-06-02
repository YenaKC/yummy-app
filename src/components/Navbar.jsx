import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div id="nav">
            <div>
                <img className="logo" src="../img/yummy-logo.png" alt="Yummy app Logo" />
            </div>
            <nav className="nav-wrap">
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/dashboard">Dashboard</Link>

                {/* Removed Recipe Details from Navbar. */}
                {/* Recipe Details is accessed through each recipe card because it requires a specific recipe ID(/recipe/:recipeId). */}
                {/* <Link to ="/recipe">Recipe Details</Link> */}
            </nav>
        </div>
    )
}