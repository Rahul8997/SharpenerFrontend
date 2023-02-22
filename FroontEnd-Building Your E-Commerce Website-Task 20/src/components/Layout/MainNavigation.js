import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { appContext } from '../../Store/Context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  let ctx=useContext(appContext);
  let history=useHistory();

  const handleLogout=(e)=>{
    e.preventDefault();
    localStorage.removeItem("idToken")
    ctx.setToken(null);
   console.log(ctx);
    ctx.setIsLoggedIn(false);
    history.push('/')
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {!ctx.isLoggedin && <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {ctx.isLoggedin && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {ctx.isLoggedin && <button onClick={handleLogout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
