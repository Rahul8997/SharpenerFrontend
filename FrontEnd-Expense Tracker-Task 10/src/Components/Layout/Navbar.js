import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { expContext } from '../Store/ExpenseContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const history = useHistory();
    const ctx = useContext(expContext)
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token")
        ctx.setLogin(false);
        ctx.setIsLoggedIn(false);
        ctx.setToken(null);
        history.push('/')
        ctx.profileInfo({ myName: "", myUrl: "" });
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-primary" aria-current="page" to="/">
                                    MyWebLink
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" exact to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" exact to="/expenses">Expenses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" exact to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" exact to="/">About Us</Link>
                            </li>
                        </ul>
                        {ctx.isLoggedIn && <form className="form-inline my-2 my-lg-0">
                            <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                        </form>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
