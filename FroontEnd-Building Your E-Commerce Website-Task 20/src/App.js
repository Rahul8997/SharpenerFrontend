import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { appContext } from './Store/Context';

function App() {
  let ctx=useContext(appContext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!ctx.isLoggedin && <Route path='/auth'>
          <AuthPage />
        </Route>}
         <Route path='/profile'>
          {ctx.isLoggedin && <UserProfile />}
          {!ctx.isLoggedin && <Redirect to="/auth" />}
        </Route>
        <Route path="*" exact>
        <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
