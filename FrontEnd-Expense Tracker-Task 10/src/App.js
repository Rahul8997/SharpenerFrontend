import { Fragment, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DummyScreen from './Components/Layout/DummyScreen';
import Navbar from './Components/Layout/Navbar'
import ProfileDetails from './Components/Layout/ProfileDetails';
import Expenses from './Components/Pages/Expenses';
import ForgetPasswordPage from './Components/Pages/ForgetPasswordPage';
import Login from './Components/Pages/Login';
import { expContext } from './Components/Store/ExpenseContext';
function App() {
  let ctx = useContext(expContext);
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
          {ctx.token && <DummyScreen />}
          {!ctx.token && <Redirect to='/' />}
        </Route>
        <Route exact path='/details'>
          <ProfileDetails />
        </Route>
        <Route exact path='/expenses'>
          {ctx.isLoggedIn && <Expenses />}
          {!ctx.isLoggedIn && <Redirect to='/' />}
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;