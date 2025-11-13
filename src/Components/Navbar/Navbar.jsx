import "./Navbar.css"
function Navbar () {
    return(
        <nav className="navbar">
            <div className="logo">NewHome</div>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Furnitures</li>
                <li>Blog</li>
                <li>Contact US</li>
            </ul>
            <div className="login">
                <span className="login-text">Login</span>
                <i className="fa fa-user user-icon"></i>
                <i className="fa fa-search search-icon"></i>
            </div>

        </nav>
    )
}

export default Navbar;