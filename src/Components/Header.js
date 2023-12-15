import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-brand">Employee Management App</div>
                <Link to="/adduser" className="btn btn-outline-light">Add User</Link>

            </nav>
            
        </div>
    )
}

export default Header
