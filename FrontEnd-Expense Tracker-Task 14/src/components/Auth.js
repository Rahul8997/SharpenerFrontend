import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
import classes from './Auth.module.css';
import UserProfile from './UserProfile';

const Auth = () => {
  let dispatch=useDispatch()
  const handleLogin=()=>{
    dispatch(authActions.login());
  }
  let authenticationStatus=useSelector(state=>state.authentication.isAuthenticated)
  return (
    <>
     {!authenticationStatus && <main className={classes.auth}>
     <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
      </section>
    </main>}
      {authenticationStatus && <UserProfile/>}
      </>
  );
};

export default Auth;
