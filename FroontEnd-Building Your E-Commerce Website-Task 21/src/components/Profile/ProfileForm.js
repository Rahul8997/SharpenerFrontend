import { useContext, useRef } from 'react';
import { appContext } from '../../Store/Context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {

  let ctx=useContext(appContext);
  let passwrd=useRef();
const handleChangePassword=(e)=>{
  e.preventDefault();
  console.log({
    idToken: ctx.token,
    password: passwrd.current.value,
    returnSecureToken: true,
  })
fetch(
  'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyByOrvUk-TKCvmY39IHjB_EQvxRkvKF3Wc',
  {
    method: 'POST',
    body: JSON.stringify({
      idToken: ctx.token,
      password: passwrd.current.value,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
).then((res) => {
  
}).catch(e=>console.log(e));

}
  return (
    <form className={classes.form} onSubmit={handleChangePassword}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' ref={passwrd} id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
