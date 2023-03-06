import React from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, themeActions } from '../Store';

function CalculateTotalExpense(array){
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        sum=sum+parseInt(array[i].expenseAmount);
    }
    return sum;
    }

const Navbar = () => {
    const history = useHistory();
    const isLoggedIn=useSelector(state=>state.authentication.isLoggedIn);
    const expenses = useSelector(state => state.expense.expenses);
    const mode=useSelector(state=>state.theme.mode)
    const themeShow=useSelector(state=>state.theme.showTheme)
    let dispatch=useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token")
        dispatch(authActions.loginFalse())
        dispatch(authActions.setIsloggedIn(false))
        dispatch(authActions.setToken(null))
        history.push('/')
        dispatch(authActions.setProfileInfo({ myName: "", myUrl: "" }))
    }
    const handleToggleMode = (e) => {
        e.preventDefault();
        dispatch(themeActions.setMode());
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                                <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"  to="/expenses">Expenses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"  to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"  to="/">About Us</Link>
                            </li>
                        </ul>
                        {isLoggedIn && <form className="form-inline my-2 my-lg-0">
                            {CalculateTotalExpense(expenses) >= 10000 && themeShow && <button className='btn btn-primary mx-1' onClick={handleToggleMode}>{!mode?"Enable light mode":"Enable dark mode"}</button>}
                            <button className='btn btn-primary mx-1' onClick={handleLogout}>Logout</button>
                        </form>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
