import { Provider, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import DummyScreen from './Components/Layout/DummyScreen';
import Navbar from './Components/Layout/Navbar'
import ProfileDetails from './Components/Layout/ProfileDetails';
import Expenses from './Components/Pages/Expenses';
import ForgetPasswordPage from './Components/Pages/ForgetPasswordPage';
import Login from './Components/Pages/Login';
import store from './Components/Store';

function App() {
  const token = useSelector(state => state.authentication.token);
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  const mode= useSelector(state => state.theme.mode);
  return (
    <Provider store={store}>
    <div  className={!mode?'bg-secondary text-light':''} style={{height:"100vh"}}>
      
      <Navbar />
      <div>
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
      </div>
    </div>
    </Provider>
  );
}

export default App;