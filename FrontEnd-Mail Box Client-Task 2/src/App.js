import Navigationbar from './Components/Layout/Navigationbar';
import Login from './Components/Pages/Login';
import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import DummyScreen from './Components/Layout/DummyScreen';
import { useSelector } from 'react-redux';


function App() {
  const token = useSelector(state => state.authentication.token)
  return (
    <>
      <Navigationbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/profile'>
            {token && <DummyScreen />}
            {!token && <Redirect to='/' />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;