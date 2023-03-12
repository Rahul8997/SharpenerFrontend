import Navigationbar from './Components/Layout/Navigationbar';
import Login from './Components/Pages/Login';
import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import DummyScreen from './Components/Pages/Inbox';
import { useSelector } from 'react-redux';
import Inbox from './Components/Pages/Inbox';
import ComposeMail from './Components/Pages/ComoseMail';



function App() {
  const token = useSelector(state => state.authentication.token)
  return (
    <>
      <Navigationbar />
      <div>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/composemail'>
            <ComposeMail />
          </Route>
          <Route exact path='/inbox'>
            {token && <Inbox />}
            {!token && <Redirect to='/' />}
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;