import classes from './Header.module.css';
import { authActions } from '../store';
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
const authenticationStatus=useSelector(state=>state.authentication.isAuthenticated);
const dispatch=useDispatch();
const handleLogout=()=>{
  dispatch(authActions.logout());
}
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
     {authenticationStatus && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
           <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;
