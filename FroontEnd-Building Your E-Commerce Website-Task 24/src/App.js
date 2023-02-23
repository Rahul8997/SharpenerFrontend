import { useContext, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Heading from './Components/Layout/Heading';
import MusicContent from './Components/Layout/MusicContent';
import Navbar from './Components/Layout/Navbar';
import CartProvider, { cartContext } from './Components/Store/CartProvider';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import HeaderContent from './Components/Layout/HeaderContent';
import Contact from './Components/Pages/Contact';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Product from './Components/Pages/Product';
import ProductDetail from './Components/Pages/ProductDetail';
import Login from './Components/Pages/Login';


function App() {
  const [showCart, setShowCart] = useState(false);
  let ctx=useContext(cartContext);
  const handleToggleCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }
  return (
      <BrowserRouter>
        {showCart && <Cart handleToggleCart={handleToggleCart} />}
        <Navbar handleToggleCart={handleToggleCart} />
        <Switch>
          <Route exact path='/'>
            <HeaderContent />
            <Home />
            <Footer />
          </Route>

          <Route exact path='/about'>
            <Heading />
            <About />
            <Footer />
          </Route>
          <Route exact path='/store'>
            <Heading />
            <MusicContent handleToggleCart={handleToggleCart} />
            <Footer />
          </Route>
          <Route exact path='/contact'>
            <Contact />
            <Footer />
          </Route>
          <Route exact path='/products'>
            {ctx.isLoggedIn && <Product />}
            {!ctx.isLoggedIn && <Redirect to='/login' />}
            <Footer />
          </Route>
          <Route exact path='/login'>
            <Login />
            <Footer />
          </Route>
          <Route exact path='/products/:productId'>
            <ProductDetail />
            <Footer />
          </Route>
          
        </Switch>

      </BrowserRouter>
  );
}

export default App;