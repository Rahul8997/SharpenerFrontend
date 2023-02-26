import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import DummyScreen from './Components/Layout/DummyScreen';
import Navbar from './Components/Layout/Navbar'
import ProfileDetails from './Components/Layout/ProfileDetails';
import Login from './Components/Pages/Login';
function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/profile'>
          <DummyScreen />
        </Route>
        <Route exact path='/details'>
          <ProfileDetails />
        </Route>

      </Switch>

    </Fragment>
  );
}

export default App;