import { Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import DummyScreen from './Components/Layout/DummyScreen';
import Navbar from './Components/Layout/Navbar'
import ProfileDetails from './Components/Layout/ProfileDetails';
import Expenses from './Components/Pages/Expenses';
import ForgetPasswordPage from './Components/Pages/ForgetPasswordPage';
import Login from './Components/Pages/Login';
import { counterActions } from './Components/Store';
function App() {
  const token = useSelector(state => state.authentication.token);
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  
  // let ctx = useContext(expContext);
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/forget'>
          <ForgetPasswordPage />
        </Route>
        <Route exact path='/profile'>
          {token && <DummyScreen />}
          {!token && <Redirect to='/' />}
        </Route>
        <Route exact path='/details'>
          <ProfileDetails />
        </Route>
        <Route exact path='/expenses'>
          {isLoggedIn && <Expenses />}
          {!isLoggedIn && <Redirect to='/' />}
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;