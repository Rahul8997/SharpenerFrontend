import React from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return <nav className={classes.nav}>
          <ul>
            {ctx && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      }}

    </AuthContext.Consumer>
  );
};

export default Navigation;
