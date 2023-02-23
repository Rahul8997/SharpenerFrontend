import { useContext, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Heading from './Components/Layout/Heading';
import MusicContent from './Components/Layout/MusicContent';
import Navbar from './Components/Layout/Navbar';
import CartProvider from './Components/Store/CartProvider';
import { cartContext } from './Components/Store/CartProvider';
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
  const cartCtx = useContext(cartContext);
  const handleToggleCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }
  return (
    <BrowserRouter>
      <CartProvider>
        {showCart && <Cart handleToggleCart={handleToggleCart} />}
        <Navbar handleToggleCart={handleToggleCart} />
        <Route exact path='/'>
          <HeaderContent />
          <Home />
        </Route>
        <Route exact path='/about'>
          <Heading />
          <About />
        </Route>
        <Route exact path='/store'>
          <Heading />
          <MusicContent handleToggleCart={handleToggleCart} />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/products'>
          {cartCtx.isLoggedIn && <Product />}
          {!cartCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/products/:productId'>
          <ProductDetail />
        </Route>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;