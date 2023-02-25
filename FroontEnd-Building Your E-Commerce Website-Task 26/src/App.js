import { lazy, Suspense, useContext, useState } from 'react';
import { cartContext } from './Components/Store/CartProvider';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
const Navbar=lazy(()=>import('./Components/Layout/Navbar'))
const MusicContent=lazy(()=>import('./Components/Layout/MusicContent'))
const ProductDetail=lazy(()=>import('./Components/Pages/ProductDetail'))
const Cart=lazy(()=>import('./Components/Cart/Cart'))
const Heading=lazy(()=>import('./Components/Layout/Heading'))
const Footer=lazy(()=>import('./Components/Layout/Footer'))
const Login = lazy(() => import('./Components/Pages/Login'))
const HeaderContent = lazy(() => import('./Components/Layout/HeaderContent'))
const Contact = lazy(() => import('./Components/Pages/Contact'))
const Product = lazy(() => import('./Components/Pages/Product'))
const About = lazy(() => import('./Components/Pages/About'))
const Home = lazy(() => import('./Components/Pages/Home'))
function App() {
  const [showCart, setShowCart] = useState(false);
  let ctx = useContext(cartContext);
  const handleToggleCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }
  return (
    <BrowserRouter>
      {showCart && <Suspense fallback={<p>Loading...</p>}><Cart handleToggleCart={handleToggleCart} /></Suspense>}
      <Suspense fallback={<p>Loading...</p>}><Navbar handleToggleCart={handleToggleCart} /></Suspense>
      <Switch>
        <Route exact path='/'>
          <Suspense fallback={<p>Loading...</p>}><HeaderContent /></Suspense>
          <Suspense fallback={<p>Loading...</p>}><Home /></Suspense>
          <Suspense fallback={<p>Loading...</p>}><Footer /></Suspense>
        </Route>

        <Route exact path='/about'>
          <Suspense fallback={<p>Loading...</p>}><Heading /></Suspense>
          <Suspense fallback={<p>Loading...</p>}><About /></Suspense>
          <Suspense fallback={<p>Loading...</p>}><Footer /></Suspense>
        </Route>
        <Route exact path='/store'>
          <Suspense fallback={<p>Loading...</p>}><Heading /></Suspense>
          <Suspense fallback={<p>Loading...</p>}><MusicContent handleToggleCart={handleToggleCart}/></Suspense>
          <Suspense fallback={<p>Loading...</p>}><Footer /></Suspense>
        </Route>
        <Route exact path='/contact'>
          <Suspense fallback={<p>Loading...</p>}><Contact /></Suspense>
          <Suspense fallback={<p>Loading...</p>}><Footer /></Suspense>
        </Route>
        <Route exact path='/products'>
          {ctx.isLoggedIn && <Suspense fallback={<p>Loading...</p>}><Product /></Suspense>}
          {!ctx.isLoggedIn && <Redirect to='/login' />}
          <Suspense fallback={<p>Loading...</p>}><Footer /></Suspense>
        </Route>
        <Route exact path='/login'>
          <Suspense fallback={<p>Loading...</p>}><Login /></Suspense>
          <Suspense fallback={<p>Loading...</p>}><Footer /></Suspense>
        </Route>
        <Route exact path='/products/:productId'>
          <Suspense fallback={<p>Loading...</p>}><ProductDetail /></Suspense>
          <Suspense fallback={<p>Loading...</p>}><Footer /></Suspense>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;